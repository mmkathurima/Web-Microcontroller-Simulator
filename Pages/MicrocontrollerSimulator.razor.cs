using mcsim.Data.MicrocontrollerSimulator;
using mcsim.Data.MicrocontrollerSimulator.Components;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;
using Plotly.Blazor.Traces;
using Plotly.Blazor.Traces.ScatterLib;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using XtermBlazor;

namespace mcsim.Pages;

public partial class MicrocontrollerSimulator
{
    private string runBtn = "Run", AValHex = "= x00", AValDec = "A = 0",
        BValHex = "= x00", BValDec = "B = 0", testVectorText;
    private string fileName, fileText;
    private bool running = false, continueEnabled = false, stepEnabled = false,
        formatDisabled = false, testVectorEnabled = false, testVectorReadOnly = false,
        ipsDisabled = false, exportDiagram = false, pushButton = false, pushButtonDisabled = false,
        nestedInterruptsEnabled;
    private VM vm, vm_terminate;
    private TimeSpan timeSpan;
    private DateTime startTime;
    private ConcurrentDictionary<string, (string address, string value)> symbols;
    private int ips = 3;
    private uint ipp = 250;
    private string[] ipsLevels = { "Slowest", null, "Realtime", null, "Fastest" };
    private IBrowserFile file;

    private System.Threading.Timer timer;

    private DotNetObjectReference<MicrocontrollerSimulator> aref;

    private Xterm console;
    private TerminalOptions consoleOptions = new TerminalOptions()
    {
        CursorStyle = CursorStyle.Bar,
    };
    private string[] _addonIds = { "xterm-addon-fit", };

    private List<AInput> inputs = new List<AInput>();
    private AInput A
    {
        set => this.inputs.Add(value);
    }
    private List<OutputB> outputs = new List<OutputB>();
    private OutputB B
    {
        set => this.outputs.Add(value);
    }
    private List<AudioOutput> audioOutputs = new List<AudioOutput>();
    private AudioOutput BAudio
    {
        set => this.audioOutputs.Add(value);
    }

    private async Task<string> EditorText()
    {
        return Convert.ToString(await this.js.InvokeAsync<object>("aceEditor.session.getValue"));
    }

    private async Task RunCode()
    {
        if (!this.running)
        {
            this.vm = new VM();
            this.vm.vm = VMInterface.CreateVM();
            this.fileName = Path.Combine(Path.GetTempPath(), DateTime.Now.ToString("yyyyMMddHHmmssffff.c"));
            this.fileText = await this.EditorText();
            File.WriteAllText(this.fileName, this.fileText);
            VMInterface.SetFilename(this.vm.vm, this.fileName);

            using (new DialogCloser())
            {
                if (await this.DoCompile())
                {
                    VMInterface.SetIPP(this.vm.vm, this.ipp);
                    this.formatDisabled = true;
                    await this.js.InvokeVoidAsync("aceEditor.setReadOnly", true);
                    await this.Run();
                    this.runBtn = "Stop";
                    this.ResetStopWatch();
                    this.StartStopWatch(false);
                    if (this.TestVectorEnabled)
                        await this.RunInputVectors();
                }
            }
        }
        else
        {
            this.userStoppedExec = true;
            await this.Stop();
            File.Delete(this.fileName);
        }
        this.running = !this.running;
    }

    private async Task Continue()
    {
        if (VMInterface.IsBroken(this.vm.vm) == 1)
        {
            await this.js.InvokeVoidAsync("removeAllMarkers");
            VMInterface.Step(this.vm.vm);
            VMInterface.SetUnBroken(this.vm.vm);
            this.StartStopWatch(true);
        }
    }

    private async Task Step()
    {
        VMInterface.AtBreakpoint(this.vm.vm);
        VMInterface.Step(this.vm.vm);
        await this.js.InvokeVoidAsync("removeAllMarkers");
        this.Update(null);
    }

    private void AClick(AInput A)
    {
        Pins pin = A.ID switch
        {
            "A0" => Pins.A0,
            "A1" => Pins.A1,
            "A2" => Pins.A2,
            "A3" => Pins.A3,
            "A4" => Pins.A4,
            "A5" => Pins.A5,
            "A6" => Pins.A6,
            "A7" => Pins.A7
        };
        if (A.Tag == "Off")
        {
            A.Tag = "On";
            VMInterface.SetPin(vm.vm, pin, 1);
            this.timings[A.ID].x.Add(this.timeSpan.TotalMilliseconds);
            this.timings[A.ID].y.Add(true);
        }
        else
        {
            A.Tag = "Off";
            VMInterface.SetPin(vm.vm, pin, 0);
            this.timings[A.ID].x.Add(this.timeSpan.TotalMilliseconds);
            this.timings[A.ID].y.Add(false);
        }

        this.UpdateAValue();
    }

    private void Hold(AInput A)
    {
        Pins pin = A.ID switch
        {
            "A0" => Pins.A0,
            "A1" => Pins.A1,
            "A2" => Pins.A2,
            "A3" => Pins.A3,
            "A4" => Pins.A4,
            "A5" => Pins.A5,
            "A6" => Pins.A6,
            "A7" => Pins.A7
        };
        if (A.Tag == "Off")
        {
            A.Tag = "On";
            VMInterface.SetPin(vm.vm, pin, 1);
            this.timings[A.ID].x.Add(this.timeSpan.TotalMilliseconds);
            this.timings[A.ID].y.Add(true);
        }

        this.UpdateAValue();
    }

    private void Release(AInput A)
    {
        Pins pin = A.ID switch
        {
            "A0" => Pins.A0,
            "A1" => Pins.A1,
            "A2" => Pins.A2,
            "A3" => Pins.A3,
            "A4" => Pins.A4,
            "A5" => Pins.A5,
            "A6" => Pins.A6,
            "A7" => Pins.A7
        };
        if (A.Tag == "On")
        {
            A.Tag = "Off";
            VMInterface.SetPin(vm.vm, pin, 0);
            this.timings[A.ID].x.Add(this.timeSpan.TotalMilliseconds);
            this.timings[A.ID].y.Add(false);
        }

        this.UpdateAValue();
    }

    private async Task FormatCode()
    {
        this.fileName = Path.Combine(Path.GetTempPath(), DateTime.Now.ToString("yyyyMMddHHmmssffff.c"));
        this.fileText = await this.EditorText();
        File.WriteAllText(this.fileName, this.fileText);
        /*
        * string code = await this.EditorText();
        * _ = await this.js.InvokeAsync<string>("aceEditor.session.setValue", new AStyleInterface().FormatSource(code, string.Empty));
        */
        ProcessStartInfo startInfo = new ProcessStartInfo()
        {
            CreateNoWindow = false,
            FileName = Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "GC.exe"),
            WindowStyle = ProcessWindowStyle.Hidden,
            Arguments = string.Format("-file-\"{0}\" -tab-size-4 -no-tab_out- -space_if- -space_return- -stmt_break_alone- -no-stmt_concat_if- -stmt_concat_if_and_else- -stmt_concat_else_2_stmt- -no-stmt_concat_inline_class- -no-stmt_concat_switch- -stmt_brace_style_fct-2 -stmt_brace_style-2 -stmt_brace_style_class-2 -stmt_switch_style-4 -stmt_switch_eol-1 -stmt_class_indent-1 -stmt_namespace_indent- -stmt_extern_c_indent- -no-cmt_add_gc_tag- -no-cmt_add_file- -no-cmt_add_fct_def- -code_align_max_blanks-1 -pp_style-1 -pp_align_to_code", this.fileName)
        };

        using (Process process = Process.Start(startInfo))
        {
            await process.WaitForExitAsync();
        }
        int row = await this.js.InvokeAsync<int>("getCurrentLine");
        int col = await this.js.InvokeAsync<int>("getCurrentColumn");

        await this.js.InvokeAsync<string>("aceEditor.session.setValue", await File.ReadAllTextAsync(this.fileName));
        await this.js.InvokeVoidAsync("aceEditor.gotoLine", row + 1, col, true);
        File.Delete(this.fileName);
    }

    private async Task ToggleTestVector(ChangeEventArgs e)
    {
        bool enabled = Convert.ToBoolean(e.Value);
        this.TestVectorEnabled = enabled;
        if (enabled)
        {
            await this.InvokeAsync(this.StateHasChanged);
            await this.js.InvokeVoidAsync("initTestVectorEditor");
            Debug.WriteLine(this.testVectorText);
        }
    }

    private void DialClose()
    {
        this.DialVisible = false;
    }

    private void SSDClose()
    {
        this.SSDVisible = false;
    }

    private async Task DialVisibilityChanged(ChangeEventArgs e)
    {
        if (Convert.ToBoolean(e.Value))
            await this.js.InvokeVoidAsync("renderDial");
    }

    private async Task SSDVisibilityChanged(ChangeEventArgs e)
    {
        if (Convert.ToBoolean(e.Value))
            await this.js.InvokeVoidAsync("renderSSD");
    }

    private async Task ClearTerminal()
    {
        await this.js.InvokeVoidAsync("clrscr");
    }

    private async Task OnFirstRender()
    {
        await console.InvokeAddonFunctionVoidAsync("xterm-addon-fit", "fit");
    }

    protected override Task OnInitializedAsync()
    {
        this.symbols = new ConcurrentDictionary<string, (string address, string value)>();
        return base.OnInitializedAsync();
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await this.js.InvokeVoidAsync("msimLoad");
            this.vm = new VM();
            this.vm.vm = VMInterface.CreateVM();
            this.vm_terminate = new VM();
            this.aref = DotNetObjectReference.Create(this);
            await this.js.InvokeAsync<string>("SetDotNetHelper", this.aref);
            VMInterface.SetIPP(this.vm.vm, this.ipp);

            this.timings = new ConcurrentDictionary<string, (List<double> x, List<bool> y)>();
            for (int i = 0; i < this.pinStr.Count(); i++)
            {
                this.timings.TryAdd(this.pinStr.ElementAt(i), (new List<double>(), new List<bool>()));
                this.chartData.Add(new Scatter()
                {
                    Name = this.pinStr.ElementAt(i),
                    Mode = ModeFlag.Lines,
                    X = new List<object>() { 0 },
                    Y = new List<object>() { 0 },
                    Fill = FillEnum.None
                });
            }

            ExtendLegendForTimingSeries(this.chartData, this.layout, this.settings);
            await this.chart.Relayout();
        }
    }

}
