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
        private string output = string.Empty;

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
            this.output += this.GenerateHeader();

            if (this.enablet)
            {
                this.output += "unsigned char " + this.graph.Abbrv + "_Clk;\r\n";
                this.output += "void TimerISR() {\r\n   " + this.graph.Abbrv + "_Clk = 1;\r\n}\r\n\r\n";
            }

            if (this.enableu)
            {
                this.output += "unsigned char " + this.graph.Abbrv + "_rx_flag = 0;\r\n";
                this.output += "void RxISR() {\r\n   " + this.graph.Abbrv + "_rx_flag = 1;\r\n}\r\n\r\n";
            }

            this.output += "enum " + this.graph.Abbrv + "_States { ";

            int num = 0;
            foreach (Node node in this.graph.Nodes)
            {
                num++;
                if (!(node.Name == "NONAME"))
                {
                    if (node.Name.Length == 0)
                    {
                        Debug.WriteLine("Error: All states must be named.");
                        this.output = "";
                        return;
                    }

                    this.output += this.graph.Abbrv + "_" + node.Name;

                    if (num < this.graph.NumStates)
                        this.output += ", ";
                    else this.output += " } " + this.graph.Abbrv + "_State;\r\n\r\n";
                }
            }

            this.output += "TickFct_" + this.graph.Name.Replace(" ", "_") + "() {\r\n   ";

            for (int i = 0; i < this.graph.Nodes.Count; i++)
            {
                Node node2 = this.graph.Nodes[i];
                if (node2.ForLoopEnabled && !node2.Loop.Equals(default(LoopStruct)))
                {
                    this.output += "static int " + this.graph.Abbrv + "_" + node2.Name + "_" + node2.Loop.Initial + ";\n   ";
                    string[] array = node2.Loop.Initial.Split('=');
                    node2.Loop = node2.Loop with
                    {
                        LoopVar = this.graph.Abbrv + "_" + node2.Name + "_" + array[0],
                        UpdateCVar = string.Join(node2.Loop.LoopVar, node2.Loop.Update.Split(array[0])),
                        ConditionCVar = string.Join(node2.Loop.LoopVar, node2.Loop.Condition.Split(array[0]))
                    };
                }
            }

            this.output += this.GenerateStateMachineExternal();
            this.output += "}\r\n\r\n";
            this.output += "int main() {\r\n   ";

            if (this.enablet)
            {
                this.output += "const unsigned int period" + this.graph.Name.Replace(" ", "_") + " = " + this.graph.Period + ";";

                if (this.graph.Period == "1000")
                    this.output += " // 1000 ms default\r\n   ";
                else this.output += "\r\n   ";

                this.output += "TimerSet(period" + this.graph.Name.Replace(" ", "_") + ");\r\n   TimerOn();\r\n   ";
            }

            if (this.enableu)
                this.output += "UARTOn();\r\n\r\n";

            if (this.graph.InitialStateName.Length != 0)
            {
                this.output += "\r\n   " + this.graph.Abbrv + "_State = -1; // Initial state\r\n   ";
                this.output += "B = 0; // Init outputs\r\n\r\n   ";
                this.output += "while (1) {\r\n      TickFct_" + this.graph.Name.Replace(" ", "_") + "();";

                if (this.enablet)
                {
                    this.output += "\r\n      while (!" + this.graph.Abbrv + "_Clk);";
                    this.output += "\r\n      " + this.graph.Abbrv + "_Clk = 0;\r\n   ";
                }

                this.output += "\r\n   } // while (1)\r\n} // Main";
            }
            else
            {
                Debug.WriteLine("Error: Initial state not selected");
                this.output = "";
            }
        }

        private string GenerateHeader()
        {
            string time = DateTime.Now.ToString("MM'/'dd'/'yyyy HH:mm:ss");

            string text = "/*\r\n* This code was automatically generated using the State Machine Builder tool\r\n* " +
                "at " + time + "\r\n*/\r\n\r\n#include \"rims.h\"\r\n\r\n";

            if (this.graph.GlobalCode.Length > 0)
                text += this.graph.GlobalCode + "\r\n";

            return text;
        }

        private string GenerateStateMachineExternal()
        {
            string text = "";
            bool flag = false;
            text = text + "switch (" + this.graph.Abbrv + "_State) { // Transitions\r\n      case -1:\r\n";
            if (this.graph.InitEdge.Actions != "")
                text = text + "         " + this.graph.InitEdge.Actions.Replace("\n", "\r\n         ") + "\r\n";

            string text6 = text;
            text = text6 + "         " + this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + this.graph.InitialStateName + ";\r\n         break;\r\n      ";
            foreach (Node node in this.graph.Nodes)
            {
                if (node.Name == "NONAME")
                    continue;

                if (!node.PriorityEnabled)
                {
                    bool _ = node.ForLoopEnabled;
                }
                string text7 = text;
                text = text7 + "   case " + this.graph.Abbrv + "_" + node.Name + ": ";
                bool flag2 = false;
                int index = -1;
                int num = 0;
                this.CPriority = 1;
                if (node.PriorityEnabled)
                {
                    int num2 = 1;
                    foreach (Edge edge in this.graph.Edges)
                    {
                        if (edge.Condition.Length == 0)
                        {
                            Debug.WriteLine("Error: Empty condition in transition from state " + edge.Tail.Name);
                            return "";
                        }
                        if (edge.Tail == node)
                            num2++;
                    }
                    while (this.CPriority < num2)
                    {
                        foreach (Edge edge2 in this.graph.Edges)
                        {
                            bool flag3 = false;
                            if (edge2.Tail == node)
                            {
                                if (edge2.Condition.ToLower() != "other")
                                {
                                    if (edge2.Priority == this.CPriority && this.CPriority == 1)
                                    {
                                        string text8 = text;
                                        text = text8 + "\r\n         if (" + edge2.Condition + ") {\r\n            " +
                                            this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge2.Head.Name + ";";
                                        this.CPriority++;
                                        flag3 = true;
                                    }
                                    else if (edge2.Priority == this.CPriority)
                                    {
                                        string text9 = text;
                                        text = text9 + "\r\n         else if (" + edge2.Condition + ") {\r\n            " +
                                            this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge2.Head.Name + ";";
                                        this.CPriority++;
                                        flag3 = true;
                                    }
                                    if (edge2.Actions.Length > 0 && flag3)
                                        text = text + "\r\n            " + edge2.Actions.Replace("\n", "\r\n            ") + "\r\n         }";
                                    else if (flag3)
                                        text += "\r\n         }";
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
                    foreach (Edge edge3 in this.graph.Edges)
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
                                this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + node.Name + ";\n            " +
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
                                        this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.Head.Name + ";";
                                    flag = true;
                                }
                                else
                                {
                                    if (node.ForLoopEnabled && !node.Loop.Equals(default(LoopStruct)))
                                    {
                                        string text12 = text;
                                        text = text12 + "\r\n         else if (!(" + node.Loop.ConditionCVar + ")) {\r\n            " +
                                            this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.Head.Name + ";";
                                        string text13 = text;
                                        text = text13 + "\r\n            " + this.graph.Abbrv + "_" + node.Name + "_" +
                                            node.Loop.Initial + ";";
                                        if (edge3.Actions.Length <= 0)
                                            text += "\r\n         }";
                                        else
                                            text = text + "\r\n            " + edge3.Actions.Replace("\n", "\r\n            ") + "\r\n         }";

                                        num++;
                                        break;
                                    }
                                    string text2 = text;
                                    text = text2 + "\r\n         else if (" + edge3.Condition + ") {\r\n            " +
                                        this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.Head.Name + ";";
                                }
                                if (edge3.Actions.Length <= 0)
                                    text += "\r\n         }";
                                else
                                    text = text + "\r\n            " + edge3.Actions.Replace("\n", "\r\n            ") + "\r\n         }";
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
                    text = text3 + "\r\n         else {\r\n            " + this.graph.Abbrv + "_State = " + this.graph.Abbrv +
                        "_" + this.graph.Edges[index].Head.Name + ";";
                    if (this.graph.Edges[index].Actions.Length <= 0)
                        text += "\r\n         }";
                    else
                        text = text + "\r\n            " + this.graph.Edges[index].Actions.Replace("\n", "\r\n            ") + "\r\n         }";
                }
                flag = false;
                text += "\r\n         break;\r\n   ";
            }
            string text4 = text;
            text = text4 + "   default:\r\n         " + this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" +
                this.graph.InitialStateName + ";\r\n   } // Transitions\r\n\r\n   ";
            text = text + "switch(" + this.graph.Abbrv + "_State) { // State actions\r\n   ";
            List<Node> node2_source_ = this.graph.Nodes;
            for (int node2_index_ = 0; node2_index_ < node2_source_.Count; node2_index_++)
            {
                Node node2 = node2_source_[node2_index_];
                if (!(node2.Name == "NONAME"))
                {
                    string text5 = text;
                    text = text5 + "   case " + this.graph.Abbrv + "_" + node2.Name + ":\r\n         ";
                    text += node2.Actions.Replace("\n", "\n         ");
                    if (node2.Actions.Length > 2 && node2.Actions[node2.Actions.Length - 2] != '\\')
                        text += "\r\n         ";

                    text += "break;\r\n   ";
                }
            }
            text += "   default: // ADD default behaviour below\r\n      break;\r\n   ";
            return text + "} // State actions\r\n\r\n";

        }
    }
}
