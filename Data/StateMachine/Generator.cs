using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace mcsim.Data.StateMachine
{
    public class Generator
    {
        private bool enablet = false;
        private bool enableu = false;
        private int CPriority = 0;
        private Graph graph;
        private string output = "";

        public string Replace(string str, string search, string replacement) =>
            string.Join(replacement, str.Split(search));


        public Generator(Graph g)
        {
            this.graph = g;
            this.enablet = false;
            this.enableu = false;
        }

        public string GenerateCCode(bool et, bool eu)
        {
            this.enablet = et;
            this.enableu = eu;
            this.GenerateSingle();
            return this.output;
        }

        private void GenerateSingle()
        {
            output += GenerateHeader();

            if (enablet)
            {
                output += "unsigned char " + graph.Abbrv + "_Clk;\r\n";
                output += "void TimerISR() {\r\n   " + graph.Abbrv + "_Clk = 1;\r\n}\r\n\r\n";
            }

            if (enableu)
            {
                output += "unsigned char " + graph.Abbrv + "_rx_flag = 0;\r\n";
                output += "void RxISR() {\r\n   " + graph.Abbrv + "_rx_flag = 1;\r\n}\r\n\r\n";
            }

            output += "enum " + graph.Abbrv + "_States { ";

            int num = 0;
            foreach (Node node in graph.Nodes)
            {
                num++;
                if (!(node.Name == "NONAME"))
                {
                    if (node.Name.Length == 0)
                    {
                        Debug.WriteLine("Error: All states must be named.");
                        output = "";
                        return;
                    }

                    output += graph.Abbrv + "_" + node.Name;

                    if (num < graph.NumStates)
                    {
                        output += ", ";
                    }
                    else
                    {
                        output += " } " + graph.Abbrv + "_State;\r\n\r\n";
                    }
                }
            }

            output += "TickFct_" + graph.Name.Replace(" ", "_") + "() {\r\n   ";

            for (int i = 0; i < graph.Nodes.Count; i++)
            {
                Node node2 = graph.Nodes[i];
                if (node2.ForLoopEnabled && !node2.Loop.Equals(default(LoopStruct)))
                {
                    output += "static int " + graph.Abbrv + "_" + node2.Name + "_" + node2.Loop.Initial + ";\n   ";
                    string[] array = node2.Loop.Initial.Split('=');
                    node2.Loop = node2.Loop with
                    {
                        LoopVar = graph.Abbrv + "_" + node2.Name + "_" + array[0],
                        UpdateCVar = Replace(node2.Loop.Update, array[0], node2.Loop.LoopVar),
                        ConditionCVar = Replace(node2.Loop.Condition, array[0], node2.Loop.LoopVar)
                    };
                }
            }

            output += GenerateStateMachineExternal();
            output += "}\r\n\r\n";
            output += "int main() {\r\n   ";

            if (enablet)
            {
                output += "const unsigned int period" + graph.Name.Replace(" ", "_") + " = " + graph.Period + ";";

                if (graph.Period == "1000")
                {
                    output += " // 1000 ms default\r\n   ";
                }
                else
                {
                    output += "\r\n   ";
                }

                output += "TimerSet(period" + graph.Name.Replace(" ", "_") + ");\r\n   TimerOn();\r\n   ";
            }

            if (enableu)
            {
                output += "UARTOn();\r\n\r\n";
            }

            if (graph.InitialStateName.Length != 0)
            {
                output += "\r\n   " + graph.Abbrv + "_State = -1; // Initial state\r\n   ";
                output += "B = 0; // Init outputs\r\n\r\n   ";
                output += "while (1) {\r\n      TickFct_" + graph.Name.Replace(" ", "_") + "();";

                if (enablet)
                {
                    output += "\r\n      while (!" + graph.Abbrv + "_Clk);";
                    output += "\r\n      " + graph.Abbrv + "_Clk = 0;\r\n   ";
                }

                output += "\r\n   } // while (1)\r\n} // Main";
            }
            else
            {
                Debug.WriteLine("Error: Initial state not selected");
                output = "";
            }
        }

        private string GenerateHeader()
        {
            string time = DateTime.Now.ToString("MM'/'dd'/'yyyy HH:mm:ss");

            string text = "/*\r\nThis code was automatically generated using the Riverside-Irvine State machine Builder tool\r\n" +
                "Version 2.9 --- " + time + " PST\r\n*/\r\n\r\n" + "#include \"rims.h\"\r\n\r\n";

            if (graph.GlobalCode.Length > 0)
            {
                text += graph.GlobalCode + "\r\n";
            }

            return text;
        }

        public string GenerateStateMachineExternal()
        {
            string text = "";
            bool flag = false;
            text = text + "switch (" + graph.Abbrv + "_State) { // Transitions\r\n   ";
            text += "   case -1:\r\n";
            if (graph.InitEdge.Actions != "")
            {
                text = text + "         " + graph.InitEdge.Actions.Replace("\n", "\r\n         ") + "\r\n";
            }
            string text6 = text;
            text = text6 + "         " + graph.Abbrv + "_State = " + graph.Abbrv + "_" + graph.InitialStateName + ";\r\n         break;\r\n      ";
            foreach (var node in graph.Nodes)
            {
                if (node.Name == "NONAME")
                {
                    continue;
                }
                if (!node.PriorityEnabled)
                {
                    var _ = node.ForLoopEnabled;
                }
                string text7 = text;
                text = text7 + "   case " + graph.Abbrv + "_" + node.Name + ": ";
                bool flag2 = false;
                int index = -1;
                int num = 0;
                CPriority = 1;
                if (node.PriorityEnabled)
                {
                    int num2 = 1;
                    foreach (var edge in graph.Edges)
                    {
                        if (edge.Condition.Length == 0)
                        {
                            Debug.WriteLine("Error: Empty condition in transition from state " + edge.Tail.Name);
                            return "";
                        }
                        if (edge.Tail == node)
                        {
                            num2++;
                        }
                    }
                    while (CPriority < num2)
                    {
                        foreach (var edge2 in graph.Edges)
                        {
                            bool flag3 = false;
                            if (edge2.Tail == node)
                            {
                                if (edge2.Condition.ToLower() != "other")
                                {
                                    if (edge2.Priority == CPriority && CPriority == 1)
                                    {
                                        string text8 = text;
                                        text = text8 + "\r\n         if (" + edge2.Condition + ") {\r\n            " +
                                            graph.Abbrv + "_State = " + graph.Abbrv + "_" + edge2.Head.Name + ";";
                                        CPriority++;
                                        flag3 = true;
                                    }
                                    else if (edge2.Priority == CPriority)
                                    {
                                        string text9 = text;
                                        text = text9 + "\r\n         else if (" + edge2.Condition + ") {\r\n            " +
                                            graph.Abbrv + "_State = " + graph.Abbrv + "_" + edge2.Head.Name + ";";
                                        CPriority++;
                                        flag3 = true;
                                    }
                                    if (edge2.Actions.Length > 0 && flag3)
                                    {
                                        text = text + "\r\n            " + edge2.Actions.Replace("\n", "\r\n            ") + "\r\n         }";
                                    }
                                    else if (flag3)
                                    {
                                        text += "\r\n         }";
                                    }
                                }
                                else
                                {
                                    if (flag2)
                                    {
                                        Debug.WriteLine("Error: Multiple 'other' transitions exist for state " + node.Name);
                                        return "";
                                    }
                                    flag2 = true;
                                    index = num;
                                }
                            }
                            num++;
                        }
                    }
                }
                else
                {
                    foreach (var edge3 in graph.Edges)
                    {
                        if (edge3.Condition.Length == 0)
                        {
                            Debug.WriteLine("Error: Empty condition in transition from state ");
                            return "";
                        }
                        if (node.ForLoopEnabled && !flag && !node.Loop.Equals(default(LoopStruct)))
                        {
                            string text10 = text;
                            text = text10 + "\r\n         if (" + node.Loop.ConditionCVar + ") {\r\n            " +
                                graph.Abbrv + "_State = " + graph.Abbrv + "_" + node.Name + ";\n            " +
                                node.Loop.UpdateCVar + ";\n         }";
                            flag = true;
                        }
                        if (edge3.Tail == node)
                        {
                            if (edge3.Condition.ToLower() != "other")
                            {
                                if (!flag)
                                {
                                    string text11 = text;
                                    text = text11 + "\r\n         if (" + edge3.Condition + ") {\r\n            " +
                                        graph.Abbrv + "_State = " + graph.Abbrv + "_" + edge3.Head.Name + ";";
                                    flag = true;
                                }
                                else
                                {
                                    if (node.ForLoopEnabled && !node.Loop.Equals(default(LoopStruct)))
                                    {
                                        string text12 = text;
                                        text = text12 + "\r\n         else if (!(" + node.Loop.ConditionCVar + ")) {\r\n            " +
                                            graph.Abbrv + "_State = " + graph.Abbrv + "_" + edge3.Head.Name + ";";
                                        string text13 = text;
                                        text = text13 + "\r\n            " + graph.Abbrv + "_" + node.Name + "_" +
                                            node.Loop.Initial + ";";
                                        text = edge3.Actions.Length <= 0 ? text + "\r\n         }" :
                                            text + "\r\n            " + edge3.Actions.Replace("\n", "\r\n            ")
                                                + "\r\n         }";
                                        num++;
                                        break;
                                    }
                                    string text2 = text;
                                    text = text2 + "\r\n         else if (" + edge3.Condition + ") {\r\n            " +
                                        graph.Abbrv + "_State = " + graph.Abbrv + "_" + edge3.Head.Name + ";";
                                }
                                text = edge3.Actions.Length <= 0 ? text + "\r\n         }" : text + "\r\n            " +
                                    edge3.Actions.Replace("\n", "\r\n            ") + "\r\n         }";
                            }
                            else
                            {
                                if (flag2)
                                {
                                    Debug.WriteLine("Error: Multiple 'other' transitions exist for state " + node.Name);
                                    return "";
                                }
                                flag2 = true;
                                index = num;
                            }
                        }
                        num++;
                    }
                }
                if (flag2)
                {
                    string text3 = text;
                    text = text3 + "\r\n         else {\r\n            " + graph.Abbrv + "_State = " + graph.Abbrv +
                        "_" + graph.Edges[index].Head.Name + ";";
                    text = graph.Edges[index].Actions.Length <= 0 ? text + "\r\n         }" :
                        text + "\r\n            " + graph.Edges[index].Actions.Replace("\n", "\r\n            ") + "\r\n         }";
                }
                flag = false;
                text += "\r\n         break;\r\n   ";
            }
            string text4 = text;
            text = text4 + "   default:\r\n         " + graph.Abbrv + "_State = " + graph.Abbrv + "_" + graph.InitialStateName + ";\r\n   } // Transitions\r\n\r\n   ";
            text = text + "switch(" + graph.Abbrv + "_State) { // State actions\r\n   ";
            List<Node> node2_source_ = graph.Nodes;
            for (int node2_index_ = 0; node2_index_ < node2_source_.Count; node2_index_++)
            {
                Node node2 = node2_source_[node2_index_];
                if (!(node2.Name == "NONAME"))
                {
                    string text5 = text;
                    text = text5 + "   case " + graph.Abbrv + "_" + node2.Name + ":\r\n         ";
                    text += node2.Actions.Replace("\n", "\n         ");
                    if (node2.Actions.Length > 2 && node2.Actions[node2.Actions.Length - 2] != '\\')
                    {
                        text += "\r\n         ";
                    }
                    text += "break;\r\n   ";
                }
            }
            text += "   default: // ADD default behaviour below\r\n      break;\r\n   ";
            return text + "} // State actions\r\n\r\n";

        }
    }
}
