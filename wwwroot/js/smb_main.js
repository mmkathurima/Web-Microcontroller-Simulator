var editors = [];

function smbLoad() {
    for (let i = 0; i < 3; i++) {
        let e = ace.edit("editor" + i);
        e.setTheme("ace/theme/sqlserver");
        e.session.setMode("ace/mode/c_cpp");
        e.setOptions({
            enableLiveAutocompletion: true,
            enableSnippets: true,
            enableBasicAutocompletion: true,
            fontSize: "11pt"
        });
        editors.push(e);
    }
    editors[0].session.setValue("/*\n   Define user variables and functions for this state machine here.\n*/\n");
    editors[0].navigateFileEnd();
    editors[1].setReadOnly(true);
    editors[2].setReadOnly(true);

    const state = {
        lastClickPos: { x: 0, y: 0 },
        selectedState: null,
    };
    const initState = document.getElementById("initState");
    const transitionUl = document.getElementById("transitions");

    window.states = [];
    window.transitions = [];
    const smEditor = document.getElementById('smeditor');
    let transition;


    smEditor.backgroundColor = "ghostwhite";
    smEditor.width = window.innerWidth * .5;
    window.addEventListener("resize", function (e) {
        smEditor.width = window.innerWidth * .5;
    });

    const sm = {
        initialState: 'idle',
        rules: {},
    };
    const removeStateTransition = function () {
        try {
            if (transition) {
                window.transitions = window.transitions.filter(x => x.id !== transition.id);
                removeTransitionUl();
                smEditor.deleteTransition(transition.id);
                console.log("transition array", window.transitions);
                return;
            }
            if (state.selectedState) {
                smEditor.deleteState(state.selectedState.name);
                window.states = window.states.filter(x => x.name !== state.selectedState.name);
                for (let i = 0; i < initState.length; i++) {
                    if (initState[i].textContent === state.selectedState.name)
                        initState.remove(initState[i]);
                }
                console.log("states array", window.states);
            }
        } catch (e) {
            //smEditor.deleteTransition(transition.id);
            //window.transitions = window.transitions.filter(x => x.id !== transition.id);
            //console.log("transition array", window.transitions)
            throw e;
        }
    }

    const removeTransitionUl = function () {
        const trs = transitionUl.children;
        for (let i = 0; i < trs.length; i++) {
            if (trs[i].id === transition.id)
                transitionUl.removeChild(trs[i]);
        }
    }

    const clickPosDiv = document.getElementById('last_click_pos_container');
    const addStateBtn = document.getElementById('add_state_btn');
    const stateNameInput = document.getElementById('state_name_input');
    addStateBtn.addEventListener('click', () => {
        try {
            if (stateNameInput.value.length > 0) {
                smEditor.addState(stateNameInput.value, state.lastClickPos.x, state.lastClickPos.y);
                const st = {
                    name: stateNameInput.value,
                    forLoopEnabled: false,
                    loop: undefined,
                    priorityEnabled: false,
                    actions: ""
                };
                window.states.push(st);
                console.log("new state", st);

                let opt = document.createElement("option");
                opt.id = st.name;
                opt.value = st.name;
                opt.textContent = st.name;

                initState.add(opt);
            }
        } catch (e) {
            window.alert("Error: " + e.message);
        }
    });

    const eventNameInput = document.getElementById('event_name_input');
    const selectedStateDiv = document.getElementById('selected_state');
    const startTransitionBtn = document.getElementById('start_transition_btn');
    startTransitionBtn.addEventListener('click', () => {
        if (state.selectedState && eventNameInput.value.length > 0) {
            const trnstn = smEditor.startAddTransition(
                eventNameInput.value,
                state.selectedState.name,
                state.selectedState.x,
                state.selectedState.y
            );
            console.log("start add transition", trnstn);
            window.setTimeout(function () {
                console.log("head/dest", trnstn.dest);
                const tr = {
                    id: trnstn.id,
                    condition: "",
                    head: trnstn.dest,
                    tail: trnstn.src,
                    priority: 1,
                    stroke: trnstn.stroke,
                    actions: "" //TODO: Add actions textarea
                };
                transition = tr;
                window.transitions.push(tr);
                const li = document.createElement("li");
                li.id = tr.id;
                li.className = "list-group-item";
                li.textContent = tr.condition;
                li.style.backgroundColor = tr.stroke;
                transitionUl.appendChild(li);

                console.log("new transition", tr);

            }, 2000);
        }
    });

    const deleteBtn = document.getElementById('delete_btn');
    deleteBtn.addEventListener('click', () => {
        if (event.target.nodeName.toLowerCase() !== "input") {
            console.log('delete', state, transition);
            removeStateTransition();
        }
    });
    const cancelTransitionBtn = document.getElementById('cancel_transition_btn');
    cancelTransitionBtn.addEventListener('click', () => {
        smEditor.stopAddTransition();
        window.transitions = window.transitions.filter(x => x.id === transition.id);
        removeTransitionUl();
        smEditor.deleteTransition(transition.id);
    });

    setInterval(() => {
        smEditor.currentState = ['moving', 'idle'][Math.round(Math.random() * 2)];
    }, 3000);

    smEditor.stateMachine = sm;
    smEditor.setCurrentState('moving');
    editors[1].session.on("change", function () {
        if (transition) {
            for (let i = 0; i < window.transitions.length; i++) {
                if (window.transitions[i].id === transition.id) {
                    window.transitions[i].actions = editors[1].session.getValue();
                    return;
                }
            }
            return;
        }

        if (state.selectedState) {
            for (let i = 0; i < window.states.length; i++) {
                if (window.states[i].name === state.selectedState.name) {
                    window.states[i].actions = editors[1].session.getValue();
                    return;
                }
            }
        }
    });

    editors[2].session.on("change", function () {
        if (transition) {
            for (let i = 0; i < window.transitions.length; i++) {
                if (window.transitions[i].id === transition.id) {
                    window.transitions[i].condition = editors[2].session.getValue();
                    document.getElementById(transition.id).textContent = window.transitions[i].condition;
                    return;
                }
            }
            return;
        }
    });

    const updateStateActionEditor = function (event) {
        editors[1].setReadOnly(false);
        editors[2].setReadOnly(true);
        let s = window.states.find(x => x.name === state.selectedState.name);
        console.log(window.states, s, state.selectedState.name);
        if (s) {
            editors[1].session.setValue(s.actions);
            editors[2].session.setValue("");
        }
    }

    const updateTransitionActionConditionEditor = function (event) {
        transition = event.detail.transition;
        editors[1].setReadOnly(false);
        editors[2].setReadOnly(false);
        let t = window.transitions.find(x => x.id === transition.id);
        console.log(window.transitions, t, transition.id);
        if (t) {
            editors[1].session.setValue(t.actions);
            editors[2].session.setValue(t.condition);
        }
    }

    // state
    smEditor.addEventListener('state:rightclick', (event) => {
        transition = null;
        updateStateActionEditor(event);
        console.log('state right click', event);
    });
    smEditor.addEventListener('state:click', (event) => {
        state.selectedState = event.detail.state;
        selectedStateDiv.innerText = event.detail.state.name;
        transition = null;
        updateStateActionEditor(event);
        console.log('state click', event);
    });

    smEditor.addEventListener('state:doubleclick', (event) => {
        transition = null;
        updateStateActionEditor(event);
        console.log('state double click', event);
    });

    // transition
    smEditor.addEventListener('transition:rightclick', (event) => {
        updateTransitionActionConditionEditor(event);
        console.log('transition right click', event);
    });
    smEditor.addEventListener('transition:click', (event) => {
        updateTransitionActionConditionEditor(event);
        console.log('transition click', event);
    });
    smEditor.addEventListener('transition:out', (event) => {
        updateTransitionActionConditionEditor(event);
        console.log('transition out', event);
    });
    smEditor.addEventListener('transition:doubleclick', (event) => {
        updateTransitionActionConditionEditor(event);
        console.log('transition double click', event);
    });

    // canvas events
    smEditor.addEventListener('canvas:rightclick', (event) => {
        console.log('canvas right click', event);
        transition = null;
        editors[1].setReadOnly(true);
        editors[2].setReadOnly(true);
    });
    smEditor.addEventListener('canvas:click', (event) => {
        console.log('canvas click', event);
        const { x, y } = event.detail.canvas;
        //
        state.lastClickPos = { x, y };
        clickPosDiv.innerText = `X: ${x}, Y: ${y}`;
        transition = null;
        editors[1].setReadOnly(true);
        editors[2].setReadOnly(true);
    });
    smEditor.addEventListener('canvas:doubleclick', (event) => {
        console.log('canvas double click', event)
        transition = null;
        editors[1].setReadOnly(true);
        editors[2].setReadOnly(true);
    });
    smEditor.addEventListener('statemachine:change', (event) => {
        console.log('state machine change', event.detail)
        transition = null;
    });

    document.addEventListener("keydown", (event) => {
        //console.log(event);
        if (event.keyCode === 46 && event.target.nodeName.toLowerCase() !== "input") {
            console.log("delete", event, state, transition);
            removeStateTransition();
        }
    });
}

function highlightC() {
    window.setTimeout(function () {
        hljs.highlightElement(document.querySelector("code"));
    }, 250);
}

function getTransitions() {
    return window.transitions.map(x => {
        x.head = window.states.find(y => y.name == x.head._name);
        x.tail = window.states.find(y => y.name == x.tail._name);
        return x;
    });
}

function getStates() {
    return window.states;
}

function getFirstEditorValue() {
    return editors[0].session.getValue();
}

function getInitState() {
    return document.getElementById("initState").value;
}

function getStatesTransitions() {
    let s = {
        states: window.states,
        transitions: window.transitions,
        firstEditor: editors[0].session.getValue(),
        initState: document.getElementById("initState").value
    };
    console.log(s);
    return s;
}
