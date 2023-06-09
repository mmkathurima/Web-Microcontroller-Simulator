import {fabric} from "fabric";
import Transition from "./transition.mjs";
import {EDITOR_DEFAULTS, ELEMENT_EVENTS, ObjectEvent} from "./common.mjs";
import State from "./state.mjs";

export default class StateMachineEditor extends HTMLElement {
    constructor() {
        super();
        // internal state
        this._isDragging = false;
        this._newTransition = null;
        this._lastPosX = 0;
        this._lastPosY = 0;
        this.stateMachineRules = {};
        this._initialState = '';
        this._currentState = '';
        this._transitions = [];
        this._statesMap = {};
        // configuration
        this._backgroundColor = EDITOR_DEFAULTS.backgroundColor;
        this._maxZoom = EDITOR_DEFAULTS.maxZoom;
        this._minZoom = EDITOR_DEFAULTS.minZoom;
        this._root = this.attachShadow({mode: 'open'});
        this._canvasElement = document.createElement('canvas');
        this._root.appendChild(this._canvasElement);
        this._canvas = this._canvas = new fabric.Canvas(this._canvasElement, {
            backgroundColor: this._backgroundColor.toString(),
            selection: false,
            fireRightClick: true,
            stopContextMenu: true,
        });
        this._canvas.on('mouse:down', this.handleMouseDown.bind(this));
        this._canvas.on('mouse:up', this.handleMouseUp.bind(this));
        this._canvas.on('mouse:wheel', this.handleMouseWheel.bind(this));
        this._canvas.on('mouse:move', this.handleMouseMove.bind(this));
        this._canvas.on('mouse:dblclick', this.handleDoubleClick.bind(this));
    }

    static get observedAttributes() {
        return ['width', 'height', 'currentstate'];
    }

    get stateMachine() {
        return this.getStateMachine();
    }

    set stateMachine(value) {
        this.setStateMachine(value);
    }

    get currentState() {
        return this.getAttribute('currentstate');
    }

    set currentState(value) {
        if (value) {
            this.setAttribute('currentstate', value);
        }
    }

    get width() {
        return this.getAttribute('width');
    }

    set width(newWidth) {
        if (newWidth == null) {
            return;
        }
        this.setWidth(Number(newWidth));
        this.setAttribute('width', newWidth);
    }

    get height() {
        return this.getAttribute('height');
    }

    set height(newHeight) {
        if (newHeight == null)
            return;
        this.setHeight(Number(newHeight));
        this.setAttribute('height', newHeight);
    }

    connectedCallback() {
        this.setCanvasSize(Number(this.getAttribute('width')) || 100, Number(this.getAttribute('height')) || 100);
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        switch (name) {
            case 'width':
                this.setWidth(Number(newValue));
                break;
            case 'height':
                this.setHeight(Number(newValue));
                break;
            case 'currentstate':
                this.setCurrentState(newValue);
                break;
            default:
                console.log('defalut case');
                break;
        }
    }

    initialRender() {
        // clear old render
        this._transitions = [];
        this._statesMap = {};
        this._canvas.clear();
        this._canvas.setBackgroundColor(this._backgroundColor.toString(), () => {
            console.log('cleared');
        });
        // new render
        const stateList = Object.entries(this.stateMachineRules);
        stateList.forEach(([stateName, {metadata: {x, y},},]) => {
            this.drawState(stateName, x, y);
        });
        stateList.forEach(([stateName, {events}]) => {
            const eventKeys = Object.keys(events);
            const src = this._statesMap[stateName];
            eventKeys.forEach((event) => {
                const destStateName = events[event];
                const dest = this._statesMap[destStateName];
                this.drawTransition(event, {src, dest});
            });
        });
    }

    // ACTIONS
    setCurrentState(value) {
        const oldState = this._statesMap[this._currentState];
        if (oldState) {
            oldState.active = false;
        }
        const newState = this._statesMap[value];
        if (newState) {
            newState.active = true;
            this._currentState = value;
        }
    }

    setStateMachine({initialState, rules}) {
        this.stateMachineRules = rules;
        this._initialState = initialState;
        this.initialRender();
        this.setCurrentState(initialState);
    }

    addState(name, x, y) {
        if (typeof name !== 'string' || this.stateMachineRules[name] != null) {
            throw new Error('State Already Exists');
        }
        this.stateMachineRules[name] = {
            metadata: {x, y},
            events: {},
        };
        this.drawState(name, x, y);
        this.handleStateMachineChange();
    }

    setInitialState(name) {
        const newInitialState = this._statesMap[name];
        const oldInitialState = this._statesMap[this._initialState];
        if (newInitialState)
            newInitialState.initial = true;
        if (oldInitialState)
            oldInitialState.initial = false;
        this._initialState = name;
    }

    deleteState(name) {
        if (this._statesMap[name] == null) {
            throw new Error('Invalid State Item');
        }
        // clear state instance
        this._statesMap[name].remove();
        delete this._statesMap[name];
        // clear transition instances
        this._transitions = this._transitions.filter((transition) => {
            var _a, _b;
            if (((_a = transition.src) === null || _a === void 0 ? void 0 : _a.name) === name || ((_b = transition.dest) === null || _b === void 0 ? void 0 : _b.name) === name) {
                transition.remove();
                return false;
            }
            return true;
        });
        this.handleStateMachineChange();
    }

    deleteTransition(id) {
        this._transitions = this._transitions.filter((transition) => {
            if (transition.id === id && transition.src) {
                transition.remove();
                return false;
            }
            return true;
        });
        this.handleStateMachineChange();
    }

    startAddTransition(event, srcName, destX, destY) {
        if (this._statesMap[srcName] == null) {
            throw new Error('Invalid State Item');
        }
        if (this._newTransition != null) {
            throw new Error('Already adding transition');
        }
        const src = this._statesMap[srcName];
        this._newTransition = this.drawTransition(event, {
            src,
            defaultX: destX,
            defaultY: destY,
        });
        return this._newTransition;
    }

    stopAddTransition() {
        if (this._newTransition == null)
            return;
        this._newTransition.remove();
        this._newTransition = null;
    }

    setCanvasSize(width, height) {
        this._canvas.setWidth(width);
        this._canvas.setHeight(height);
    }

    setHeight(height) {
        this._canvas.setHeight(height);
    }

    setWidth(width) {
        this._canvas.setWidth(width);
    }

    setHoverCursor(cursor) {
        this._canvas.hoverCursor = cursor;
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(backgroundColor) {
        this._backgroundColor = backgroundColor;
        this.handleStateMachineChange();
    }

    getStateMachine() {
        const newDef = {};
        for (const state of Object.values(this._statesMap)) {
            newDef[state.name] = {metadata: state.position, events: {}};
        }
        this._transitions.forEach((transition) => {
            if (transition.src && transition.dest) {
                newDef[transition.src.name].events[transition.name] = transition.dest.name;
            }
        });
        this.stateMachineRules = newDef;
        return JSON.parse(JSON.stringify(this.stateMachineRules));
    }

    // CANVAS EVENT HANDLERS
    dispatchCustomEvent(name, detail) {
        this.dispatchEvent(new CustomEvent(name, {
            detail,
        }));
    }

    updateAllObjects() {
        this._canvas.requestRenderAll();
        Object.values(this._statesMap).forEach((state) => state.setCoords());
        this._transitions.forEach((transition) => {
            transition.setCoords();
        });
    }

    handleMouseWheel({e}) {
        e.preventDefault();
        e.stopPropagation();
        const {offsetX, offsetY, deltaY} = e;
        let zoom = this._canvas.getZoom() + deltaY / 200;
        if (zoom > this._maxZoom)
            zoom = this._maxZoom;
        if (zoom < this._minZoom)
            zoom = this._minZoom;
        this._canvas.zoomToPoint(new fabric.Point(offsetX, offsetY), zoom);
        this.updateAllObjects();
    }

    handleMouseDown({button, target, e, absolutePointer}) {
        const {altKey, clientX, clientY} = e;
        if (target != null)
            return;
        if (altKey) {
            this._isDragging = true;
            this._lastPosX = clientX;
            this._lastPosY = clientY;
            return;
        }
        const detail = {
            event: e,
            canvas: {
                x: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.x,
                y: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.y
            },
        };
        if (button === 3) {
            this.dispatchCustomEvent(ELEMENT_EVENTS.canvas.rightClick, detail);
        } else {
            this.dispatchCustomEvent(ELEMENT_EVENTS.canvas.click, detail);
        }
    }

    handleMouseUp() {
        this._isDragging = false;
    }

    handleMouseMove({absolutePointer, e}) {
        if (this._isDragging) {
            const {clientX, clientY} = e;
            if (this._canvas.viewportTransform &&
                this._canvas.viewportTransform[4] &&
                this._canvas.viewportTransform[5]) {
                this._canvas.viewportTransform[4] += clientX - this._lastPosX;
                this._canvas.viewportTransform[5] += clientY - this._lastPosY;
            }
            this._lastPosX = clientX;
            this._lastPosY = clientY;
            this.updateAllObjects();
        }
        // update new transition destination
        if (this._newTransition == null || absolutePointer == null)
            return;
        if (this._newTransition.src && this._newTransition.dest == null) {
            this._newTransition.defaultDest = {
                x: absolutePointer.x,
                y: absolutePointer.y,
            };
        }
    }

    handleDoubleClick({absolutePointer, target, e: event}) {
        if (target != null)
            return;
        this.dispatchCustomEvent(ELEMENT_EVENTS.canvas.doubleClick, {
            canvas: {
                x: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.x,
                y: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.y
            },
            event: event,
        });
    }

    // STATE EVENTS
    handleStateMachineChange() {
        this.dispatchCustomEvent(ELEMENT_EVENTS.stateMachineChange, {
            stateMachine: this.getStateMachine(),
        });
    }

    handleStateMove(_opt, state) {
        this._transitions.forEach((transition) => {
            if (transition.dest && transition.dest.name === state.name) {
                transition.dest = state;
            }
            if (transition.src && transition.src.name === state.name) {
                transition.src = state;
            }
            transition.setCoords();
        });
        state.setCoords();
    }

    handleStateDoubleClick({absolutePointer, e: event}, state) {
        const {name, position: {x, y},} = state;
        this.dispatchCustomEvent(ELEMENT_EVENTS.state.doubleClick, {
            state: {name, x, y},
            canvas: {
                x: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.x,
                y: absolutePointer === null || absolutePointer === void 0 ? void 0 : absolutePointer.y
            },
            event: event,
        });
    }

    handleStateMouseOver({e: event}, state) {
        const {position: {x, y}, name,} = state;
        this.dispatchCustomEvent(ELEMENT_EVENTS.state.over, {
            state: {name, x, y},
            event: event,
        });
        if (this._newTransition) {
            this._newTransition.dest = state;
        }
    }

    handleStateMouseOut({e}, state) {
        const {position: {x, y}, name,} = state;
        this.dispatchCustomEvent(ELEMENT_EVENTS.state.out, {
            state: {name, x, y},
            event: e,
        });
        if (this._newTransition == null)
            return;
        if (this._newTransition.dest) {
            this._newTransition.dest = null;
        }
    }

    handleStateClick({button, e}, state) {
        const {position: {x, y}, name,} = state;
        const detail = {
            state: {name, x, y},
            event: e,
        };
        if (button === 3) {
            this.dispatchCustomEvent(ELEMENT_EVENTS.state.rightClick, detail);
        } else {
            this.dispatchCustomEvent(ELEMENT_EVENTS.state.click, detail);
        }
        if (this._newTransition == null)
            return;
        if (this._newTransition.src && this._newTransition.dest) {
            this.stateMachineRules[this._newTransition.src.name].events[this._newTransition.name] = this._newTransition.dest.name;
            this._transitions.push(this._newTransition);
            this._newTransition = null;
            this.handleStateMachineChange();
        }
    }

    handleStateMouseUp() {
        this.handleStateMachineChange();
    }

    // TRANSITION
    handleTransitionClick({button, e}, transition) {
        const detail = {
            transition,
            event: e,
        };
        if (button === 3) {
            this.dispatchCustomEvent(ELEMENT_EVENTS.transition.rightClick, detail);
        } else {
            this.dispatchCustomEvent(ELEMENT_EVENTS.transition.click, detail);
        }
    }

    handleTransitionOver({e: event}, transition) {
        const detail = {
            transition,
            event: event,
        };
        this.dispatchCustomEvent(ELEMENT_EVENTS.transition.over, detail);
    }

    handleTransitionOut({e: event}, transition) {
        const detail = {
            transition,
            event: event,
        };
        this.dispatchCustomEvent(ELEMENT_EVENTS.transition.over, detail);
    }

    handleTransitionDoubleClick({e: event}, transition) {
        const detail = {
            transition,
            event: event,
        };
        this.dispatchCustomEvent(ELEMENT_EVENTS.transition.doubleClick, detail);
    }

    // DRAW METHODS
    drawState(name, x, y) {
        const state = new State(this._canvas, name, x, y, {
            initial: this._initialState === name,
            active: this._currentState === name,
        });
        state.on(ObjectEvent.MouseOut, this.handleStateMouseOut.bind(this));
        state.on(ObjectEvent.MouseOver, this.handleStateMouseOver.bind(this));
        state.on(ObjectEvent.MouseDown, this.handleStateClick.bind(this));
        state.on(ObjectEvent.MouseUp, this.handleStateMouseUp.bind(this));
        state.on(ObjectEvent.MouseDoubleClick, this.handleStateDoubleClick.bind(this));
        state.on(ObjectEvent.Moving, this.handleStateMove.bind(this));
        state.render();
        this._statesMap[name] = state;
        return state;
    }

    drawTransition(event, options) {
        const transition = new Transition(this._canvas, event, options);
        transition.on(ObjectEvent.MouseOver, this.handleTransitionOver.bind(this));
        transition.on(ObjectEvent.MouseOut, this.handleTransitionOut.bind(this));
        transition.on(ObjectEvent.MouseDown, this.handleTransitionClick.bind(this));
        transition.on(ObjectEvent.MouseDoubleClick, this.handleTransitionDoubleClick.bind(this));
        this._transitions.push(transition);
        return transition;
    }
}
