﻿using mcsim.Data.MicrocontrollerSimulator.Components;
using mcsim.Data.MicrocontrollerSimulator;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Plotly.Blazor.Traces;
using Plotly.Blazor;
using Plotly.Blazor.Traces.ScatterLib;
using Newtonsoft.Json;

namespace mcsim.Pages
{
    public partial class MicrocontrollerSimulator
    {
        private List<uint> breakpoints;
        private nint breakpoint_step;
        private uint timer_id;
        private StringBuilder sb = new StringBuilder(1_000);
        private List<SymbolRecord> symbolRecords = new List<SymbolRecord>();
        private bool runFromInputVectorsThreadIsRunning = false, userStoppedExec = false;
        private const uint INSTR_PER_SEC = 5_000;
        private Pins[] APins = { Pins.A0, Pins.A1, Pins.A2, Pins.A3, Pins.A4, Pins.A5, Pins.A6, Pins.A7 };
        private Pins[] BPins = { Pins.B0, Pins.B1, Pins.B2, Pins.B3, Pins.B4, Pins.B5, Pins.B6, Pins.B7 };

        private async Task<bool> DoCompile()
        {
            bool flag = true;
            string[] array = Assembly.GetExecutingAssembly().Location.Split('\\');
            string location = "";
            string[] array2 = Array.Empty<string>();

            this.sb.Clear();
            foreach (string key in this.timings.Keys)
            {
                this.timings[key].x.Clear();
                this.timings[key].y.Clear();
            }

            await this.js.InvokeVoidAsync("clrscrn");
            for (uint num = 0u; array.Length > 1 && num < array.Length - 1; num++)
            {
                location += array[num];
                location += "\\";
            }
            VMInterface.SetBaseDirectory(vm.vm, location);
            if (!File.Exists(Environment.GetEnvironmentVariable("TEMP") + "\\RIMS.h"))
                File.Copy(location + "RIMS.h", Environment.GetEnvironmentVariable("TEMP") + "\\RIMS.h", overwrite: true);

            int num2 = VMInterface.Compile(vm.vm);
            const int num3 = 1024;
            StringBuilder stringBuilder = new StringBuilder(num3);
            VMInterface.GetLastAsmLoc(vm.vm, stringBuilder, (uint)num3);
            string asmloc = Environment.GetEnvironmentVariable("TEMP") + stringBuilder.ToString();
            try
            {
                File.Delete(Environment.GetEnvironmentVariable("TEMP") + "\\temp.c");
            }
            catch (FileNotFoundException)
            {
            }
            nint intPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(ErrorStruct)));
            unsafe
            {
                byte* ptr = (byte*)intPtr.ToPointer();
                for (int i = 0; i < Marshal.SizeOf(typeof(ErrorStruct)); i++)
                    ptr[i] = 0;
            }
            VMInterface.GetErrors(vm.vm, intPtr);
            ErrorStruct errorStruct = (ErrorStruct)Marshal.PtrToStructure(intPtr, typeof(ErrorStruct));
            Marshal.FreeHGlobal(intPtr);
            await js.InvokeVoidAsync("aceEditor.session.clearAnnotations");
            switch (num2)
            {
                case -2:
                    await console.WriteLine("\x1B[1;3;31mError: Compilation failed. Possible occurrence of an undefined reference, or missing main function.\x1B[0m");
                    flag = false;
                    break;
                case -1:
                    await console.WriteLine("\x1B[1;3;31mInvalid file selected.\x1B[0m");
                    flag = false;
                    break;
                case > 0:
                    {
                        bool isWarning = false;
                        flag = false;
                        array2 = new string[num2];
                        string path;
                        Regex regex = new Regex(":(\\d*):", RegexOptions.IgnoreCase);
                        List<dynamic> err = new List<dynamic>();
                        for (int j = 0; j < num2; j++)
                        {
                            array2[j] = Marshal.PtrToStringAnsi(errorStruct.errors[j]);
                            path = array2[j].Split("c:")[0];
                            array2[j] = array2[j].Replace(path, Path.GetFileName(path));
                            MatchCollection matchCollection = regex.Matches(array2[j]);
                            isWarning = array2[j].Split(':').Length > 2 && array2[j].Split(':')[2].Trim().ToLower() == "warning";
                            err.AddRange(matchCollection.Select((x) => new
                            {
                                row = Convert.ToInt32(x.Groups[1].Value) - 1,
                                column = 0,
                                text = array2[j],
                                type = isWarning ? "warning" : "error" // also warning and information
                            }));

                        }
                        await js.InvokeVoidAsync("aceEditor.session.setAnnotations", err);
                        await js.InvokeVoidAsync("console.log", err, err.Count);

                        for (int k = 0; k < array2.Length - 1; k++)
                        {
                            isWarning = array2[k].Split(':').Length > 2 && array2[k].Split(':')[2].Trim().ToLower() == "warning";
                            await console.WriteLine(string.Format(isWarning ? "\x1B[1;3;35m{0}\x1B[0m" : "\x1B[1;3;31m{0}\x1B[0m", array2[k]));
                            if (array2[k].ToUpper().Contains("INVALID") && (array2[k].ToUpper().Contains(".D") || array2[k].ToUpper().Contains(".S")))
                            {
                                await console.WriteLine("\x1B[1;3;31mFloating point operations are currently not  supported.\x1B[0m");
                            }
                        }
                        if (array2.Length != 0)
                        {
                            isWarning = array2[^1].Split(':').Length > 2 && array2[^1].Split(':')[2].Trim().ToLower() == "warning";
                            await console.WriteLine(string.Format(isWarning ? "\x1B[1;3;35m{0}\x1B[0m" : "\x1B[1;3;31m{0}\x1B[0m", array2[^1]));
                            if (array2[^1].ToUpper().Contains("INVALID") && (array2[^1].ToUpper().Contains(".D") || array2[^1].ToUpper().Contains(".S")))
                            {
                                await console.WriteLine("\x1B[1;3;31mFloating point operations are currently not  supported.\x1B[0m");
                            }
                        }
                        Debug.WriteLine("COMPILATION ERROR: |{0}|", args: string.Join('\n', array2));
                        break;
                    }

                default:
                    flag = true;
                    break;
            }
            Debug.WriteLine(string.Join(",", array2));
            this.StateHasChanged();
            if (array2.Select(x => x.ToLower()).Contains(@"could not find include file ""rims.h"""))
            {
                await this.js.InvokeVoidAsync("clrscrn");
                await DoCompile();
            }
            return flag;
        }

        public async Task Run()
        {
            this.breakpoints = (await js.InvokeAsync<List<object>>("aceEditor.session.getBreakpoints")).Select((x, i) => x is not null ? i : -1).Where(x => x != -1).Select(x => Convert.ToUInt32(x + 1)).ToList();

            foreach (uint u in this.breakpoints)
                VMInterface.AddBreakpoint(this.vm.vm, u);

            foreach ((Pins first, AInput second) in this.APins.Zip(this.inputs))
                VMInterface.SetPin(this.vm.vm, first, Convert.ToByte(second.Tag == "On" ? 1 : 0));

            this.vm_terminate = new VM();
            IntPtr intPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(InitStruct)));
            unsafe
            {
                byte* ptr = (byte*)intPtr.ToPointer();
                for (int i = 0; i < Marshal.SizeOf(typeof(InitStruct)); i++)
                {
                    ptr[i] = 0;
                }
            }
            VMInterface.Initialize(this.vm.vm, intPtr);
            InitStruct initStruct = (InitStruct)Marshal.PtrToStructure(intPtr, typeof(InitStruct));
            VMInterface.SetNestedInterrupts(vm.vm, this.NestedInterruptsEnabled);
            IntPtr clock = initStruct.clock;
            this.breakpoint_step = initStruct.breakpoint_pulse;


            if (this.vm.ts != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(this.vm.ts);
            }
            this.vm.ts = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(ThreadStruct)));
            TimerInterface.timeBeginPeriod(10u);
            VMInterface.SetIPP(vm.vm, 250);
            VMInterface.Run(vm.vm, vm.ts);
            this.timer_id = TimerInterface.timeSetEvent(50u, 0u, clock, vm.vm, 1u);
        }

        public async Task Stop()
        {
            this.stepEnabled = false;
            this.continueEnabled = false;
            this.indentDisabled = false;
            this.runBtn = "Run";
            this.BValHex = "= x00";
            this.BValDec = "B = 0";
            foreach (string i in this.pinStr)
            {
                this.timings[i].x.Add(this.timeSpan.TotalMilliseconds);
                this.timings[i].y.Add(false);
            }

            this.StopStopWatch();
            TimerInterface.timeKillEvent(timer_id);
            this.vm_terminate.ts = this.vm.ts;
            this.vm_terminate.vm = this.vm.vm;
            this.vm.vm = VMInterface.CreateVM();
            VMInterface.SetFilename(vm.vm, this.fileName);
            foreach ((Pins first, AInput second) in this.APins.Zip(this.inputs))
                VMInterface.SetPin(vm.vm, first, Convert.ToByte(second.Tag == "On" ? 1 : 0));
            this.UpdateAValue();
            this.UpdateBValue();
            await this.js.InvokeVoidAsync("removeAllMarkers");
            await this.js.InvokeVoidAsync("aceEditor.setReadOnly", false);

            IList<ITrace> preserve = new List<ITrace>();
            for (int i = 0; i < pinStr.Count; i++)
            {
                preserve.Add(new Scatter()
                {
                    Name = pinStr[i],
                    Mode = ModeFlag.Lines,
                    X = this.timings[this.pinStr[i]].x.Prepend(0).ToArray(),
                    Y = this.timings[this.pinStr[i]].y.Prepend(0).ToArray(),
                    Fill = FillEnum.None
                });
            }
            preserve = GetTracesFromTimingSeries(preserve, this.settings);
            await this.InvokeAsync(async () => await this.chart.Clear());
            if (this.fromVectors)
            {
                //ExtendLegendForTimingSeries(preserve.Cast<Scatter>().ToArray(), this.layout, this.settings);
                //await this.chart.Relayout();
                this.fromVectors = false;
            }

            foreach (ITrace x in preserve)
                await this.InvokeAsync(async () => await this.chart.AddTrace(x));
            this.exportDiagram = true;

            await this.InvokeAsync(this.StateHasChanged);
            VMInterface.SetNestedInterrupts(vm.vm, this.NestedInterruptsEnabled);
        }

        private void StartStopWatch(bool resume)
        {
            this.startTime = resume ? DateTime.Now - this.timeSpan : DateTime.Now;
            this.timer = new System.Threading.Timer(Update, null, 0, 100);
        }

        private void StopStopWatch()
        {
            if (this.running)
                this.timer?.Dispose();
        }

        private void ResetStopWatch()
        {
            this.StopStopWatch();
            this.timeSpan = TimeSpan.Zero;
        }

        [JSInvokable]
        public void AddBreakpoint(uint breakpoint)
        {
            VMInterface.AddBreakpoint(this.vm.vm, breakpoint);
        }

        [JSInvokable]
        public void RemoveBreakpoint(uint breakpoint)
        {
            VMInterface.RemoveBreakpoint(this.vm.vm, breakpoint);
        }

        private int Ips
        {
            get => _ips;
            set
            {
                uint num = value switch
                {
                    1 => 1,
                    2 => 125,
                    4 => 500,
                    5 => 1_000_000,
                    _ or 3 => 250,
                };
                VMInterface.SetIPP(this.vm.vm, num);
                this.ipp = num;
                _ips = value;
            }
        }

        private bool PushButton
        {
            get => this.pushButton;
            set
            {
                this.InvokeAsync(this.StateHasChanged);
                this.pushButton = value;
            }
        }

        private bool SoundOn
        {
            get => this.soundOn;
            set => this.soundOn = value;
        }

        private bool TestVectorEnabled
        {
            get => this.testVectorEnabled;
            set
            {
                this.pushButtonDisabled = value;
                this.testVectorEnabled = value;
            }
        }

        private bool NestedInterruptsEnabled
        {
            get => this.nestedInterruptsEnabled;
            set
            {
                VMInterface.SetNestedInterrupts(this.vm.vm, value);
                this.nestedInterruptsEnabled = value;
            }
        }

        private async void Update(object? state)
        {
            int currentLine;
            this.timeSpan = DateTime.Now - this.startTime;
            await this.UpdateDebugOutput();
            this.UpdateBValue();
            this.UpdateSymbols();
            this.UpdateTimer();

            if (VMInterface.IsBroken(this.vm.vm) == 1)
            {
                IntPtr intPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(TagStruct)));
                VMInterface.GetLine(vm.vm, intPtr);
                TagStruct tagStruct = (TagStruct)Marshal.PtrToStructure(intPtr, typeof(TagStruct));
                Marshal.FreeHGlobal(intPtr);
                currentLine = tagStruct.line;
                this.StopStopWatch();
                this.continueEnabled = true;
                this.stepEnabled = true;
                await this.js.InvokeVoidAsync("addMarker", currentLine - 1);
            }
            else if (VMInterface.IsRunning(this.vm.vm) != 1 && this.running && !this.userStoppedExec)
            {
                this.running = false;
                await this.Stop();
                if (!this.running)
                    await this.js.InvokeVoidAsync("window.alert", "Execution has ended.");
            }
            else
            {
                this.stepEnabled = false;
            }

            await this.InvokeAsync(this.StateHasChanged);
        }

        private void UpdateAValue()
        {
            byte pin = VMInterface.GetPin(vm.vm, Pins.A);
            string text = Convert.ToString(pin, 16);
            this.AValDec = string.Format("A = {0}", pin);
            this.AValHex = string.Format(text.Length != 1 ? "= x{0}" : "= x0{0}", text);
            this.InvokeAsync(this.StateHasChanged);
        }

        private async void UpdateBValue()
        {
            byte pin = VMInterface.GetPin(vm.vm, Pins.B);
            int[] range = Enumerable.Range(0, 8).Select(i => 1 << i).ToArray();

            if (this.SoundOn)
            {
                for (int i = 0; i < this.audioOutputs.Count; i++)
                {
                    if ((pin & range[i]) != 0 && this.audioOutputs[i].Tag != "On")
                    {
                        this.audioOutputs[i].Tag = "On";
                        await this.audioOutputs[i].ToggleSound(i);
                    }
                    else if ((pin & range[i]) == 0 && this.audioOutputs[i].Tag != "Off")
                    {
                        this.audioOutputs[i].Tag = "Off";
                        await this.audioOutputs[i].ToggleSound(i);
                    }
                }

                foreach ((AudioOutput audio, string s) in this.audioOutputs.Zip(this.pinStr.Skip(8).Take(8)))
                {
                    this.timings[s].x.Add(this.timeSpan.TotalMilliseconds);
                    this.timings[s].y.Add(audio.Tag == "On");
                }
                this.outputs.Clear();
            }
            else
            {
                for (int i = 0; i < this.audioOutputs.Count; i++)
                {
                    this.audioOutputs[i].Tag = "Off";
                    await this.audioOutputs[i].Silence(i);
                }
                for (int i = 0; i < this.outputs.Count; i++)
                {
                    if ((pin & range[i]) != 0 && this.outputs[i].Tag != "On")
                    {
                        this.outputs[i].Tag = "On";
                        await this.outputs[i].ToggleLed();
                    }
                    else if ((pin & range[i]) == 0 && this.outputs[i].Tag != "Off")
                    {
                        this.outputs[i].Tag = "Off";
                        await this.outputs[i].ToggleLed();
                    }
                }

                foreach ((OutputB @out, string s) in this.outputs.Zip(this.pinStr.Skip(8).Take(8)))
                {
                    this.timings[s].x.Add(this.timeSpan.TotalMilliseconds);
                    this.timings[s].y.Add(@out.Tag == "On");
                }
                this.audioOutputs.Clear();
            }

            string text = Convert.ToString(pin, 16);
            this.BValDec = string.Format("B = {0}", pin);
            this.BValHex = string.Format(text.Length != 1 ? "= x{0}" : "= x0{0}", text);
        }

        private async Task UpdateDebugOutput()
        {
            uint numDebugCharsWaiting = VMInterface.GetNumDebugCharsWaiting(vm.vm);
            if (numDebugCharsWaiting != 0)
            {
                this.sb.EnsureCapacity(Convert.ToInt32(numDebugCharsWaiting));
                VMInterface.GetNextDebugBuffer(vm.vm, this.sb, numDebugCharsWaiting);
                string sbs = sb.ToString();
                if (numDebugCharsWaiting >= sbs.Length)
                    await console.Write(sbs);
                else
                    await console.Write(sbs[..Convert.ToInt32(numDebugCharsWaiting)]);
            }
        }

        private void UpdateSymbols()
        {
            this.symbols.Clear();
            uint symbol = VMInterface.GetSymbol(this.vm.vm, -1, nint.Zero);
            for (int i = 0; i < symbol; i++)
            {
                nint intPtr = Marshal.AllocHGlobal(Marshal.SizeOf(typeof(SymbolRecord)));
                unsafe
                {
                    intPtr.ToPointer();
                    VMInterface.GetSymbol(this.vm.vm, i, intPtr);
                    SymbolRecord symbolRecord = (SymbolRecord)Marshal.PtrToStructure(intPtr, typeof(SymbolRecord));
                    Marshal.FreeHGlobal(intPtr);
                    if (symbolRecord.InDataSegment == 1)
                    {
                        string key = symbolRecord.Name;
                        (string address, string value) val = (symbolRecord.Address.ToString(), Convert.ToString(Convert.ToInt32(VMInterface.GetData(this.vm.vm, Convert.ToUInt16(symbolRecord.Address), (MemoryWidth)symbolRecord.ContentLength))));
                        this.symbols.AddOrUpdate(key: key, addValue: val, updateValueFactory: (string k, (string address, string value) v) => v);
                        this.symbolRecords.Add(symbolRecord);
                    }
                }
            }
        }

        private void UpdateTimer()
        {
            if (VMInterface.IsRunning(this.vm.vm) != 0)
            {
                double elapsed = VMInterface.GetElapsedCycles(this.vm.vm) / Convert.ToDouble(VMInterface.GetIPS(this.vm.vm));
                this.timeSpan = TimeSpan.FromSeconds(elapsed);
            }
            else
            {
                this.timeSpan = TimeSpan.Zero;
            }
        }

        ~MicrocontrollerSimulator()
        {
            if (vm is not null)
            {
                try
                {
                    //VMInterface.DestroyVM(this.vm.vm, this.vm.ts);
                }
                catch
                {
                    throw;
                }
            }
        }
    }
}
