/* eslint-disable @typescript-eslint/camelcase */
import strftime from "strftime";

class StringUtil {
}

StringUtil.Replace = function (str, search, replaceWith) {
    if (typeof search === "number") {
        search = String.fromCharCode(search);
    }
    if (typeof replaceWith === "number") {
        replaceWith = String.fromCharCode(replaceWith);
    }
    return str.split(search).join(replaceWith);
};

export default class Generator {
    constructor(g) {
        this.enablet = false;
        this.enableu = false;
        this.CPriority = 0;
        this.graph = g;
        this.output = "";
        this.enablet = false;
        this.enableu = false;
    }

    GenerateCCode(et, eu) {
        this.enablet = et;
        this.enableu = eu;
        this.GenerateSingle();
        return this.output;
    }

    GenerateSingle() {
        this.output += this.GenerateHeader();
        if (this.enablet) {
            this.output = this.output + "unsigned char " + this.graph.Abbrv + "_Clk;\r\n";
            this.output = this.output + "void TimerISR() {\r\n   " + this.graph.Abbrv + "_Clk = 1;\r\n}\r\n\r\n";
        }
        if (this.enableu) {
            this.output = this.output + "unsigned char " + this.graph.Abbrv + "_rx_flag = 0;\r\n";
            this.output = this.output + "void RxISR() {\r\n   " + this.graph.Abbrv + "_rx_flag = 1;\r\n}\r\n\r\n";
        }
        this.output = this.output + "enum " + this.graph.Abbrv + "_States { ";
        let num = 0;
        for (let node_index_ = 0, node_source_ = this.graph.nodes; node_index_ < node_source_.length; node_index_++) {
            const node = node_source_[node_index_];
            num++;
            if (!(node.Name == "NONAME")) {
                if (node.Name.length == 0) {
                    console.error("Error: All states must be named.");
                    this.output = "";
                    return;
                }
                this.output = this.output + this.graph.Abbrv + "_" + node.Name;
                if (num < this.graph.NumStates) {
                    this.output += ", ";
                } else {
                    this.output = this.output + " } " + this.graph.Abbrv + "_State;\r\n\r\n";
                }
            }
        }
        this.output = this.output + "TickFct_" + this.graph.Name.replace(" ", "_") + "() {\r\n   ";
        for (let node2_index_ = 0, node2_source_ = this.graph.nodes; node2_index_ < node2_source_.length; node2_index_++) {
            const node2 = node2_source_[node2_index_];
            if (node2.forloop_enabled && node2.loop) {
                const text = this.output;
                this.output = text + "static int " + this.graph.Abbrv + "_" + node2.Name + "_" + node2.loop.initial + ";\n   ";
                const array = node2.loop.initial.split('=');
                node2.loop.loopvar = this.graph.Abbrv + "_" + node2.Name + "_" + array[0];
                let update = node2.loop.update;
                node2.loop.update_cvar = StringUtil.Replace(update, array[0], node2.loop.loopvar);
                update = node2.loop.condition;
                node2.loop.condition_cvar = StringUtil.Replace(update, array[0], node2.loop.loopvar);
            }
        }
        this.output += this.GenerateStateMachineExternal();
        this.output += "}\r\n\r\n";
        this.output += "int main() {\r\n   ";
        if (this.enablet) {
            const text2 = this.output;
            this.output = text2 + "const unsigned int period" + this.graph.Name.replace(" ", "_") + " = " + this.graph.Period + ";";
            if (this.graph.Period == "1000") {
                this.output += " // 1000 ms default\r\n   ";
            } else {
                this.output += "\r\n   ";
            }
            this.output = this.output + "TimerSet(period" + this.graph.Name.replace(" ", "_") + ");\r\n   TimerOn();\r\n   ";
        }
        if (this.enableu) {
            this.output += "UARTOn();\r\n\r\n";
        }
        if (this.graph.InitialStateName.length !== 0) {
            this.output = this.output + "\r\n   " + this.graph.Abbrv + "_State = -1; // Initial state\r\n   ";
            this.output += "B = 0; // Init outputs\r\n\r\n   ";
            this.output = this.output + "while(1) {\r\n      TickFct_" + this.graph.Name.replace(" ", "_") + "();";
            if (this.enablet) {
                this.output = this.output + "\r\n      while(!" + this.graph.Abbrv + "_Clk);";
                this.output = this.output + "\r\n      " + this.graph.Abbrv + "_Clk = 0;\r\n   ";
            }
            this.output += "\r\n   } // while (1)\r\n} // Main";
        } else {
            console.error("Error: Initial state not selected");
            this.output = "";
        }
    }

    GenerateHeader() {
        const dateTime = new Date();
        let time = strftime("%m/%d/%Y %H:%M:%S", dateTime);
        /*let text = "/!*\r\nThis code was automatically generated using the Riverside-Irvine State machine Builder tool\r\n" +
            "Version 2.9 --- " + (dateTime.getMonth() + 1).toString().padStart(2, "0") + "/" +
            dateTime.getDate().toString().padStart(2, "0") + "/" + dateTime.getFullYear() + " " +
            dateTime.getHours().toString().padStart(2, "0") + ":" + dateTime.getMinutes().toString().padStart(2, "0") +
            ":" + dateTime.getSeconds().toString().padStart(2, "0") + " PST\r\n*!/\r\n\r\n" + "#include \"rims.h\"\r\n\r\n";*/
        let text = "/*\r\nThis code was automatically generated using the Riverside-Irvine State machine Builder tool\r\n" +
            "Version 2.9 --- " + time + " PST\r\n*/\r\n\r\n" + "#include \"rims.h\"\r\n\r\n";
        if (this.graph.GlobalCode.length > 0) {
            text = text + this.graph.GlobalCode + "\r\n";
        }
        return text;
    }

    GenerateStateMachineExternal() {
        let text = "";
        let flag = false;
        text = text + "switch(" + this.graph.Abbrv + "_State) { // Transitions\r\n   ";
        text += "   case -1:\r\n";
        if (this.graph.initedge.actions != "") {
            text = text + "         " + this.graph.initedge.actions.replace("\n", "\r\n         ") + "\r\n";
        }
        const text6 = text;
        text = text6 + "         " + this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + this.graph.InitialStateName + ";\r\n         break;\r\n      ";
        for (let node_index_ = 0, node_source_ = this.graph.nodes; node_index_ < node_source_.length; node_index_++) {
            const node = node_source_[node_index_];
            if (node.Name == "NONAME") {
                continue;
            }
            if (!node.priority_enabled) {
                const _ = node.forloop_enabled;
            }
            const text7 = text;
            text = text7 + "   case " + this.graph.Abbrv + "_" + node.Name + ": ";
            let flag2 = false;
            let index = -1;
            let num = 0;
            this.CPriority = 1;
            if (node.priority_enabled) {
                let num2 = 1;
                for (let edge_index_ = 0, edge_source_ = this.graph.edges; edge_index_ < edge_source_.length; edge_index_++) {
                    const edge = edge_source_[edge_index_];
                    if (edge.condition.length == 0) {
                        console.error("Error: Empty condition in transition from state " + edge.tail.Name);
                        return "";
                    }
                    if (edge.tail == node) {
                        num2++;
                    }
                }
                while (this.CPriority < num2) {
                    for (let edge2_index_ = 0, edge2_source_ = this.graph.edges; edge2_index_ < edge2_source_.length; edge2_index_++) {
                        const edge2 = edge2_source_[edge2_index_];
                        let flag3 = false;
                        if (edge2.tail == node) {
                            if (edge2.condition.toLowerCase() != "other") {
                                if (edge2.priority == this.CPriority && this.CPriority == 1) {
                                    const text8 = text;
                                    text = text8 + "\r\n         if (" + edge2.condition + ") {\r\n            " +
                                        this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge2.head.Name + ";";
                                    this.CPriority++;
                                    flag3 = true;
                                } else if (edge2.priority == this.CPriority) {
                                    const text9 = text;
                                    text = text9 + "\r\n         else if (" + edge2.condition + ") {\r\n            " +
                                        this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge2.head.Name + ";";
                                    this.CPriority++;
                                    flag3 = true;
                                }
                                if (edge2.actions.length > 0 && flag3) {
                                    text = text + "\r\n            " + edge2.actions.replace("\n", "\r\n            ") + "\r\n         }";
                                } else if (flag3) {
                                    text += "\r\n         }";
                                }
                            } else {
                                if (flag2) {
                                    console.error("Error: Multiple 'other' transitions exist for state " + node.Name);
                                    return "";
                                }
                                flag2 = true;
                                index = num;
                            }
                        }
                        num++;
                    }
                }
            } else {
                for (let edge3_index_ = 0, edge3_source_ = this.graph.edges; edge3_index_ < edge3_source_.length; edge3_index_++) {
                    const edge3 = edge3_source_[edge3_index_];
                    if (edge3.condition.length == 0) {
                        console.error("Error: Empty condition in transition from state " + edge3.tail.Name);
                        return "";
                    }
                    if (node.forloop_enabled && !flag && node.loop) {
                        const text10 = text;
                        text = text10 + "\r\n         if (" + node.loop.condition_cvar + ") {\r\n            " +
                            this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + node.Name + ";\n            " +
                            node.loop.update_cvar + ";\n         }";
                        flag = true;
                    }
                    if (edge3.tail == node) {
                        if (edge3.condition.toLowerCase() != "other") {
                            if (!flag) {
                                const text11 = text;
                                text = text11 + "\r\n         if (" + edge3.condition + ") {\r\n            " +
                                    this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.head.Name + ";";
                                flag = true;
                            } else {
                                if (node.forloop_enabled && node.loop) {
                                    const text12 = text;
                                    text = text12 + "\r\n         else if (!(" + node.loop.condition_cvar + ")) {\r\n            " +
                                        this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.head.Name + ";";
                                    const text13 = text;
                                    text = text13 + "\r\n            " + this.graph.Abbrv + "_" + node.Name + "_" +
                                        node.loop.initial + ";";
                                    text = ((edge3.actions.length <= 0) ? (text + "\r\n         }") :
                                        (text + "\r\n            " + edge3.actions.replace("\n", "\r\n            ")
                                            + "\r\n         }"));
                                    num++;
                                    break;
                                }
                                const text2 = text;
                                text = text2 + "\r\n         else if (" + edge3.condition + ") {\r\n            " +
                                    this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge3.head.Name + ";";
                            }
                            text = ((edge3.actions.length <= 0) ? (text + "\r\n         }") : (text + "\r\n            " +
                                edge3.actions.replace("\n", "\r\n            ") + "\r\n         }"));
                        } else {
                            if (flag2) {
                                console.error("Error: Multiple 'other' transitions exist for state " + node.Name);
                                return "";
                            }
                            flag2 = true;
                            index = num;
                        }
                    }
                    num++;
                }
            }
            if (flag2) {
                const text3 = text;
                text = text3 + "\r\n         else {\r\n            " + this.graph.Abbrv + "_State = " + this.graph.Abbrv +
                    "_" + this.graph.edges[index].head.Name + ";";
                text = ((this.graph.edges[index].actions.length <= 0) ? (text + "\r\n         }") :
                    (text + "\r\n            " + this.graph.edges[index].actions.replace("\n", "\r\n            ") + "\r\n         }"));
            }
            flag = false;
            text += "\r\n         break;\r\n   ";
        }
        const text4 = text;
        text = text4 + "   default:\r\n         " + this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + this.graph.InitialStateName + ";\r\n   } // Transitions\r\n\r\n   ";
        text = text + "switch(" + this.graph.Abbrv + "_State) { // State actions\r\n   ";
        for (let node2_index_ = 0, node2_source_ = this.graph.nodes; node2_index_ < node2_source_.length; node2_index_++) {
            const node2 = node2_source_[node2_index_];
            if (!(node2.Name == "NONAME")) {
                const text5 = text;
                text = text5 + "   case " + this.graph.Abbrv + "_" + node2.Name + ":\r\n         ";
                text += node2.Actions.replace("\n", "\n         ");
                if (node2.Actions.length > 2 && node2.Actions[node2.Actions.length - 2] != "\\") {
                    text += "\r\n         ";
                }
                text += "break;\r\n   ";
            }
        }
        text += "   default: // ADD default behaviour below\r\n      break;\r\n   ";
        return text + "} // State actions\r\n\r\n";
    }

    GenerateStateMachineInternal() {
        let text = "";
        text = text + "switch(" + this.graph.Abbrv + "_State) { // State actions\r\n      ";
        for (let node_index_ = 0, node_source_ = this.graph.nodes; node_index_ < node_source_.length; node_index_++) {
            const node = node_source_[node_index_];
            const text2 = text;
            text = text2 + "   case " + this.graph.Abbrv + "_" + node.Name + ":\r\n         ";
            text += node.Actions;
            if (node.Actions.length > 2 && node.Actions[node.Actions.length - 2] != "\\") {
                text += "\r\n          ";
            }
            text += "break;\r\n      ";
        }
        text += "   default: // ADD default behaviour below\r\n         break;\r\n      ";
        text += "} // State actions\r\n\r\n";
        if (this.enablet) {
            text = text + "      while(!" + this.graph.Abbrv + "_Clk);\r\n      ";
            text = text + this.graph.Abbrv + "_Clk = 0;\r\n\r\n";
        } else {
            text += "\r\n      ";
        }
        let flag = false;
        text = text + "      switch(" + this.graph.Abbrv + "_State) { // Transitions\r\n      ";
        for (let node2_index_ = 0, node2_source_ = this.graph.nodes; node2_index_ < node2_source_.length; node2_index_++) {
            const node2 = node2_source_[node2_index_];
            if (!node2.priority_enabled) {
                const _ = node2.forloop_enabled;
            }
            const text3 = text;
            text = text3 + "   case " + this.graph.Abbrv + "_" + node2.Name + ":";
            let flag2 = false;
            let index = -1;
            let num = 0;
            for (let edge_index_ = 0, edge_source_ = this.graph.edges; edge_index_ < edge_source_.length; edge_index_++) {
                const edge = edge_source_[edge_index_];
                if (edge.condition.length == 0) {
                    console.error("Error: Empty condition in transition from state " + edge.tail.Name);
                    return "";
                }
                if (edge.tail == node2) {
                    if (edge.condition.toLowerCase() != "other") {
                        if (!flag) {
                            const text4 = text;
                            text = text4 + "\r\n            if (" + edge.condition + ") {\r\n               " +
                                this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge.head.Name + ";";
                            flag = true;
                        } else {
                            const text5 = text;
                            text = text5 + "\r\n            else if (" + edge.condition + ") {\r\n               " +
                                this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" + edge.head.Name + ";";
                        }
                        text = ((edge.actions.length <= 0) ? (text + "\r\n            }") : (text + "\r\n               " +
                            edge.actions + "\r\n            }"));
                    } else {
                        if (flag2) {
                            console.error("Error: Multiple 'other' transitions exist for state " + node2.Name);
                            return "";
                        }
                        flag2 = true;
                        index = num;
                    }
                }
                num++;
            }
            if (flag2) {
                const text6 = text;
                text = text6 + "\r\n            else {\r\n               " + this.graph.Abbrv + "_State = " +
                    this.graph.Abbrv + "_" + this.graph.edges[index].head.Name + ";";
                text = ((this.graph.edges[index].actions.length <= 0) ? (text + "\r\n            }") :
                    (text + "\r\n               " + this.graph.edges[index].actions + "\r\n            }"));
            }
            flag = false;
            text += "\r\n            break;\r\n      ";
        }
        const text7 = text;
        return text7 + "   default:\r\n            " + this.graph.Abbrv + "_State = " + this.graph.Abbrv + "_" +
            this.graph.InitialStateName + ";\r\n      } // Transitions\r\n   ";
    }
}
