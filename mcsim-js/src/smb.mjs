import SMNode from "./SMNode.mjs";
import Edge from "./edge.mjs";
import Graph from "./graph.mjs";
import Generator from "./generator.mjs";
import StateMachineEditor from "./stateMachineEditor.mjs";


function generateC() {
    const generator = function () {
        const graph = new Graph({
            nodes: window.states.map(x => new SMNode(x.Name, x.forloop_enabled, x.loop, x.priority_enabled, x.Actions)),
            edges: window.transitions.map(x => new Edge(x.condition, x.head, x.tail, x.priority, x.actions)),
            Name: "State Machine",
            Period: "1000",
            Abbrv: "SM",
            GlobalCode: "/!*Define user variables and functions for this state machine here.*!/",
            initedge: {actions: ""},
            InitialStateName: window.states[0].Name
        });
        const generator = new Generator(graph);
        return generator.GenerateCCode(false, false);
    }

    if (!window.customElements.get('state-machine-editor'))
        window.customElements.define('state-machine-editor', StateMachineEditor);

    document.getElementById("gen_c").addEventListener("click", function (e) {
        const c_code = generator();
        console.log("output", e, c_code);
        document.querySelector("pre#output").innerText = c_code;
    });
}