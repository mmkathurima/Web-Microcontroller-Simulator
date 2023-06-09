import StateMachineEditor from "./stateMachineEditor.mjs";

if (!window.customElements.get('state-machine-editor'))
    window.customElements.define('state-machine-editor', StateMachineEditor);

// new StateMachineEditor("canvasid", sm)
