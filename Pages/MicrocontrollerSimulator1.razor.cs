using mcsim.Data.MicrocontrollerSimulator;
using mcsim.Data.MicrocontrollerSimulator.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;
using MudBlazor;
using Newtonsoft.Json;
using Plotly.Blazor;
using Plotly.Blazor.ConfigLib;
using Plotly.Blazor.LayoutLib;
using Plotly.Blazor.LayoutLib.LegendLib;
using Plotly.Blazor.LayoutLib.ShapeLib;
using Plotly.Blazor.Traces;
using Plotly.Blazor.Traces.ScatterLib;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace mcsim.Pages;

public partial class MicrocontrollerSimulator
{
    private ConcurrentDictionary<string, (List<object> x, List<object> y)> timings;
    private bool fromVectors = false;
    private IEnumerable<string> pinStr = Enumerable.Range(0, 16)
        .Select(x => x < 8 ? string.Format("A{0}", x) : string.Format("B{0}", x - 8));
    private IList<ITrace> chartData = new List<ITrace>();

    private PlotlyChart chart;
    private Config config = new Config()
    {
        Responsive = true,
        ScrollZoom = ScrollZoomFlag.True
    };
    private Layout layout = new Layout()
    {
        Title = new Plotly.Blazor.LayoutLib.Title()
        {
            Text = "Timing Diagram"
        },
        ShowLegend = false,
        Legend = new Legend()
        {
            TraceOrder = TraceOrderFlag.Reversed
        },
        YAxis = new[]
        {
            new YAxis()
            {
                FixedRange = true,
                TickVals = new List<object>(),
                TickText = new List<object>()
}
        },
        XAxis = new[]
        {
            new XAxis()
            {
                Title = new Plotly.Blazor.LayoutLib.XAxisLib.Title()
                {
                    Text = "Time (ms)"
                }
            }
        }
    };
    private dynamic settings = new
    {
        YDelta = 1,
        YSpacing = 1,
        ShowStartLine = true,
        ShowStopLine = true
    };

    public static IList<ITrace> GetTracesFromTimingSeries(IList<ITrace> series, dynamic settings)
    {
        int yPosition = 0;
        List<Scatter> traces = new List<Scatter>();

        foreach (Scatter serie in series.Cast<Scatter>())
        {
            List<object> x = new List<object>();
            List<object> y = new List<object>();
            bool lastState = Convert.ToBoolean(serie.Y[0]);

            if (serie.Fill == FillEnum.ToSelf)
            {
                x.Add(serie.X[0]);
                y.Add(yPosition);
            }

            for (int i = 0; i < serie.X.Count; i++)
            {
                object ix = serie.X[i];
                bool iy = Convert.ToBoolean(serie.Y[i]);

                x.Add(ix);
                y.Add(yPosition + (Convert.ToInt32(lastState) * settings.YDelta));

                if (iy != lastState)
                {
                    x.Add(ix);
                    y.Add(yPosition + (Convert.ToInt32(iy) * settings.YDelta));
                }

                lastState = iy;
            }

            if (serie.Fill == FillEnum.ToSelf)
            {
                x.Add(serie.X[serie.X.Count - 1]);
                y.Add(yPosition);
            }

            Scatter scatter = new Scatter()
            {
                X = x,
                Y = y,
                HoverInfo = HoverInfoFlag.Text,
                ConnectGaps = true,
                Fill = FillEnum.None,
                Mode = ModeFlag.Lines,
                Name = serie.Name
            };

            if (serie.Fill == FillEnum.ToSelf)
                scatter.Fill = FillEnum.ToSelf;

            traces.Add(scatter);
            yPosition += settings.YDelta + settings.YSpacing;
        }

        return traces.Cast<ITrace>().ToArray();
    }

    public static Layout ExtendLegendForTimingSeries(IList<ITrace> series, Layout layout, dynamic settings)
    {
        int yPosition = 0;
        IEnumerable<Scatter> s = series.Cast<Scatter>();
        foreach (Scatter serie in s)
        {
            layout.YAxis[0].TickVals.Add(yPosition);
            layout.YAxis[0].TickText.Add(serie.Name);
            yPosition += settings.YDelta + settings.YSpacing;
        }
        layout.Shapes ??= new List<Shape>();

        int maxY = (s.Count() - 1) * (settings.YDelta + settings.YSpacing) + settings.YDelta;

        if (settings.ShowStartLine)
        {
            layout.Shapes.Add(new Shape()
            {
                Type = TypeEnum.Line,
                X0 = s.ElementAt(0).X[0],
                Y0 = 0,
                X1 = s.ElementAt(0).X[0],
                Y1 = maxY
            });
        }

        if (settings.ShowStopLine)
        {
            layout.Shapes.Add(new Shape()
            {
                Type = TypeEnum.Line,
                X0 = s.ElementAt(0).X[s.ElementAt(0).X.Count - 1],
                Y0 = 0,
                X1 = s.ElementAt(0).X[s.ElementAt(0).X.Count - 1],
                Y1 = maxY
            });
        }

        return layout;
    }

    private async Task ExportTimingDiagram()
    {
        await this.js.InvokeAsync<object>("saveFile", string.Format("{0}.json", nameof(this.timings)), JsonConvert.SerializeObject(this.timings));
    }

    private async void UploadCode(IBrowserFile file)
    {
        this.file = file;
        //TODO upload the files to the server
        await using System.IO.Stream stream = this.file.OpenReadStream();
        using StreamReader reader = new StreamReader(stream);
        await this.js.InvokeVoidAsync("aceEditor.session.setValue", await reader.ReadToEndAsync());
    }

    private async Task<List<byte>> GetPinValuesFromFileLine(string line, int lineno)
    {
        List<byte> list = new List<byte>();
        if (line.Length > 0 && line.ToUpper()[0] == 'B')
        {
            if (line.Length < 9)
            {
                this.Snackbar.Add("Error:" + lineno + ": must have values for all 8 inputs", Severity.Error);
                return null;
            }
            foreach (char item in line[1..].Reverse())
            {
                if (item == '0' || item == '1')
                {
                    list.Add(Convert.ToByte(char.GetNumericValue(item)));
                    continue;
                }
                this.Snackbar.Add("Error:" + lineno + ": input values must be either 0 or 1", Severity.Error);
                return null;
            }
            return list;
        }
        if (line.Length > 2 && line[..2].ToUpper() == "0X")
        {
            if (line.Length < 4)
            {
                this.Snackbar.Add("Error:" + lineno + ": must have values for all 8 inputs", Severity.Error);
                return null;
            }
            foreach (char item2 in line[2..].Reverse())
            {
                try
                {
                    byte b = Convert.ToByte(item2.ToString(), 16);
                    for (int i = 0; i <= 3; i++)
                        list.Add(Convert.ToByte((i == 0 ? b : (b >> i)) & 1u));
                }
                catch (Exception)
                {
                    this.Snackbar.Add("Error:" + lineno + ": hex value invalid", Severity.Error);
                    return null;
                }
            }
            return list;
        }
        try
        {
            int num = Convert.ToInt32(line);
            for (int i = 0; i <= 7; i++)
                list.Add(Convert.ToByte((i == 0 ? num : (num >> i)) & 1u));
            return list;
        }
        catch (Exception)
        {
            this.Snackbar.Add("Error:" + lineno + ": decimal value invalid", Severity.Error);
            return null;
        }
    }

    private async Task RunInputVectors()
    {
        foreach (string key in this.timings.Keys)
        {
            this.timings[key].x.Clear();
            this.timings[key].y.Clear();
        }

        this.testVectorText = Convert.ToString(await this.js.InvokeAsync<object>("testVectorEditor.session.getValue"));
        IEnumerable<string> input = testVectorText.Split('\n');
        this.PushButton = false;
        int lineno;
        try
        {
            this.testVectorReadOnly = true;
            if (this.Ips == 5)
                this.Ips = 3;
            this.ipsDisabled = true;
            lineno = 1;
            await this.js.InvokeVoidAsync("addTestVectorMarker", lineno - 1);
            for (int i = 0; i < 8; i++)
            {
                AInput inputA = this.inputs.First(y => y.ID == string.Format("A{0}", i));
                inputA.Disabled = true;
                inputA.Value = false;
            }
            await this.InvokeAsync(this.StateHasChanged);
            using IEnumerator<string> enumerator = input.GetEnumerator();
            for (; enumerator.MoveNext(); lineno++)
            {
                string current = enumerator.Current;
                if (lineno > 1)
                    await this.js.InvokeVoidAsync("removeAllTestVectorMarkers");

                await this.js.InvokeVoidAsync("addTestVectorMarker", lineno - 1);
                if (current.Length > 0)
                {
                    if (current.ToUpper().Contains("GENERATETD"))
                    {
                        this.runFromInputVectorsThreadIsRunning = false;
                        break;
                    }
                    if (current.ToUpper().Contains("WAIT"))
                    {
                        string[] array = current.Split();
                        if (array.Length != 3)
                        {
                            this.Snackbar.Add("Error:" + lineno + ": format is 'wait number scale'", Severity.Error);
                            this.runFromInputVectorsThreadIsRunning = false;
                            break;
                        }
                        if (!double.TryParse(array[1], out double num))
                        {
                            this.Snackbar.Add("Error:" + lineno + ": format is 'wait number scale'", Severity.Error);
                            this.runFromInputVectorsThreadIsRunning = false;
                            break;
                        }
                        string text = array[2].ToUpper();
                        if (text != "MS")
                        {
                            if (text == "S")
                            {
                                int num2 = Convert.ToInt32(num * 1000.0 * 1.0 / (ipp * 20 / INSTR_PER_SEC));
                                if (num2 >= 1)
                                    await Task.Delay(num2);
                            }
                            else
                            {
                                this.Snackbar.Add("Error:" + lineno + ": scale must be either ms or s", Severity.Error);
                                this.runFromInputVectorsThreadIsRunning = false;
                            }
                        }
                        else
                        {
                            int num3 = Convert.ToInt32(num * (1f / (ipp * 20 / INSTR_PER_SEC)));
                            if (num3 >= 1)
                                await Task.Delay(num3);
                        }
                    }
                    else
                    {
                        if (current.ToUpper().Contains("ASSERT"))
                        {
                            string[] array2 = current.Split();
                            if (array2.Length != 2)
                            {
                                this.Snackbar.Add("Error:" + lineno + ": format is 'assert ########'", Severity.Error);
                                this.runFromInputVectorsThreadIsRunning = false;
                            }
                            else
                            {
                                List<byte> pinValuesFromFileLine = await this.GetPinValuesFromFileLine(array2[1], lineno);
                                if (pinValuesFromFileLine == null)
                                    this.runFromInputVectorsThreadIsRunning = false;
                                else
                                {
                                    if (VMInterface.GetPin(vm.vm, Pins.B0) != pinValuesFromFileLine[0])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B0 not equal " + pinValuesFromFileLine[0], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B1) != pinValuesFromFileLine[1])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B1 not equal " + pinValuesFromFileLine[1], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B2) != pinValuesFromFileLine[2])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B2 not equal " + pinValuesFromFileLine[2], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B3) != pinValuesFromFileLine[3])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B3 not equal " + pinValuesFromFileLine[3], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B4) != pinValuesFromFileLine[4])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B4 not equal " + pinValuesFromFileLine[4], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B5) != pinValuesFromFileLine[5])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B5 not equal " + pinValuesFromFileLine[5], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else if (VMInterface.GetPin(vm.vm, Pins.B6) != pinValuesFromFileLine[6])
                                    {
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B6 not equal " + pinValuesFromFileLine[6], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }
                                    else
                                    {
                                        if (VMInterface.GetPin(vm.vm, Pins.B7) == pinValuesFromFileLine[7])
                                            continue;
                                        this.Snackbar.Add("Assert failed:" + lineno + ": B7 not equal " + pinValuesFromFileLine[7], Severity.Error);
                                        this.runFromInputVectorsThreadIsRunning = false;
                                    }

                                }
                            }
                            break;
                        }
                        if (current.Split().Length != 1)
                        {
                            this.Snackbar.Add("Error:" + lineno + ": unknown command: " + current, Severity.Error);
                            this.runFromInputVectorsThreadIsRunning = false;
                            break;
                        }
                        List<byte> values = await this.GetPinValuesFromFileLine(current, lineno);
                        if (values == null)
                        {
                            this.runFromInputVectorsThreadIsRunning = false;
                            break;
                        }
                        IEnumerable<string> a = this.pinStr.Take(8);
                        for (int i = 0; i < 8; i++)
                        {
                            bool val = Convert.ToBoolean(values[i]);
                            for (int j = 0; j < this.inputs.Count; j++)
                            {
                                if (this.inputs[j].ID == string.Format("A{0}", i))
                                    this.inputs[j].Value = val;
                            }
                            VMInterface.SetPin(this.vm.vm, this.APins[i], values[i]);
                            this.UpdateAValue();

                            this.timings[a.ElementAt(i)].x.Add(this.timeSpan.TotalMilliseconds);
                            this.timings[a.ElementAt(i)].y.Add(val);
                        }
                    }
                }
            }
            //File.WriteAllLines("timings.csv", this.timings.Select(k => string.Format("{0},{1},,{2}", k.Key, string.Join(',', k.Value.x), string.Join(',', k.Value.y))));
        }
        catch (Exception ex2)
        {
            if (!ex2.Message.ToUpper().Contains("ABORT"))
                this.Snackbar.Add("Caught exception running test vector\n" + ex2.Message + "\n" + ex2.StackTrace, Severity.Error);
        }
        this.testVectorReadOnly = false;
        this.runFromInputVectorsThreadIsRunning = false;
        await this.js.InvokeVoidAsync("removeAllTestVectorMarkers");
        this.pushButtonDisabled = this.ipsDisabled = false;

        for (int i = 0; i < 8; i++)
            this.inputs.First(y => y.ID == string.Format("A{0}", i)).Disabled = false;

        if (!this.running)
        {
            this.fromVectors = true;
            await this.Stop();
        }
        this.runFromInputVectorsThreadIsRunning = true;
    }

}
