import {fabric} from 'fabric';
import {EDITOR_DEFAULTS, genID} from './common.mjs';
// TODO: implement hover effect of state
// over
// target._objects[0].set('stroke', 'red');
//       target._objects[0].animate('radius', 32, {
//         duration: 300,
//         onChange: this._canvas.renderAll.bind(this._canvas),
//       });
// out
// const stroke = name === this._initialState ? this._initialStateStroke : this._stateStroke;
// target._objects[0].set('stroke', stroke.toString());
// target._objects[0].animate('radius', 30, {
//   duration: 300,
//   onChange: this._canvas.renderAll.bind(this._canvas),
// });
class State {
    constructor(ctx, name, x, y, {initial = false, active = false} = {}) {
        this._rendered = false;
        this._ctx = ctx;
        this._id = genID();
        this._name = name;
        this._x = x;
        this._y = y;
        this._initial = initial;
        this._active = active;
        const stroke = this._initial ? State.initialStateStroke : State.stateStroke;
        const fill = this._active ? State.activeStateFill : State.stateFill;
        this._circle = new fabric.Circle({
            originX: 'center',
            originY: 'center',
            fill: fill.toString(),
            stroke: stroke.toString(),
            radius: State.stateRadius,
            shadow: new fabric.Shadow({
                color: 'rgba(0, 0, 0, 0.5)',
                offsetX: 5,
                offsetY: 5,
            }),
        });
        this._text = new fabric.Text(name, {
            originX: 'center',
            originY: 'center',
            fontSize: 10,
            stroke: State.textStroke.toString(),
        });
        this._group = new fabric.Group([this._circle, this._text], {
            originX: 'center',
            originY: 'center',
            left: x,
            top: y,
            hasControls: false,
            // TODO: make this configurable
            selectable: true,
            padding: 2,
        });
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get position() {
        this._x = this._group.left || 0;
        this._y = this._group.top || 0;
        return {x: this._x, y: this._y};
    }

    get initial() {
        return this._initial;
    }

    set initial(value) {
        this._initial = value;
        const stroke = this._initial ? State.initialStateStroke : State.stateStroke;
        this._circle.set('stroke', stroke.toString());
        this._ctx.renderAll();
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._initial = value;
        const fill = this._active ? State.activeStateFill : State.stateFill;
        this._circle.set('fill', fill.toString());
        this._ctx.renderAll();
    }

    on(event, handler) {
        this._group.on(event, (opt) => handler(opt, this));
    }

    remove() {
        this._ctx.remove(this._group);
        this._rendered = false;
    }

    render() {
        if (this._rendered) {
            this.remove();
        }
        this._ctx.add(this._group);
        this._rendered = true;
    }

    setCoords() {
        this._group.setCoords();
    }
}

State.initialStateStroke = EDITOR_DEFAULTS.initialStateStroke;
State.activeStateFill = EDITOR_DEFAULTS.currentStateFill;
State.stateStroke = EDITOR_DEFAULTS.stateStroke;
State.stateFill = EDITOR_DEFAULTS.stateFill;
State.textStroke = EDITOR_DEFAULTS.textStroke;
State.stateRadius = EDITOR_DEFAULTS.stateRadius;
export default State;
