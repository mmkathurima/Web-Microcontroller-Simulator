import {fabric} from 'fabric';
import State from './state.mjs';
import {EDITOR_DEFAULTS, genID, mapText2Color} from './common.mjs';

class NewTransition {
    _stroke;

    constructor(ctx, name, {src, dest, defaultX, defaultY} = {}) {
        this._handlers = [];
        this._id = genID();
        this._name = name;
        this._ctx = ctx;
        this._src = src !== null && src !== void 0 ? src : null;
        this._dest = dest !== null && dest !== void 0 ? dest : null;
        const {link, pointer} = this.render();
        this._link = link;
        this._pointer = pointer;
        this._defaultX = defaultX || 0;
        this._defaultY = defaultY || 0;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
        this.rerender();
    }

    get dest() {
        return this._dest;
    }

    set dest(value) {
        console.log("dest set to ", value);
        this._dest = value;
        this.rerender();
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get defaultDest() {
        return {x: this._defaultX, y: this._defaultY};
    }

    set defaultDest(value) {
        this._defaultX = value.x;
        this._defaultY = value.y;
        this.rerender();
    }

    get stroke() {
        return this._stroke;
    }

    set stroke(value) {
        this._stroke = value;
    }

    render() {
        var _a, _b, _c, _d;
        const defaultPos = {x: this._defaultX, y: this._defaultY};
        const srcPos = (_b = (_a = this._src) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : defaultPos;
        const destPos = (_d = (_c = this._dest) === null || _c === void 0 ? void 0 : _c.position) !== null && _d !== void 0 ? _d : defaultPos;
        const {link, pointer} = this.calcTransitionLink(srcPos.x, srcPos.y, destPos.x, destPos.y, 30);
        const stroke = mapText2Color(this._name);
        this.stroke = stroke;
        this._link = new fabric.Path(link, {
            fill: '',
            stroke,
            strokeWidth: 2,
            perPixelTargetFind: true,
            lockMovementX: true,
            lockMovementY: true,
            hasControls: false,
        });
        this._pointer = new fabric.Path(pointer, {
            stroke,
            fill: stroke,
            hasControls: false,
            selectable: false,
        });
        this._ctx.add(this._link, this._pointer);
        return {link: this._link, pointer: this._pointer};
    }

    rerender() {
        this.remove();
        this.render();
        this._handlers.forEach(({event, handler}) => {
            this._link.on(event, (opt) => handler(opt, this));
        });
    }

    remove() {
        this._ctx.remove(this._pointer);
        this._ctx.remove(this._link);
    }

    setCoords() {
        this._pointer.setCoords();
        this._link.setCoords();
    }

    on(event, handler) {
        this._handlers.push({event, handler});
        this._link.on(event, (opt) => handler(opt, this));
    }

    // CALCULATIONS
    calcLinkPath(fromX, fromY, toX, toY, curve) {
        const midX = fromX + (toX - fromX) / 2;
        const midY = fromY + (toY - fromY) / 2;
        const pX = midX - curve;
        const pY = midY + curve;
        return `M ${fromX} ${fromY} Q ${pX}, ${pY}, ${toX}, ${toY}`;
    }

    calcPointerPath(x, y, rotation = 0) {
        const height = 10;
        const base = 10;
        const side = Math.sqrt((base / 2) ** 2 + height ** 2);
        const rad = Math.atan(base / 2 / height);
        const l1 = `L ${x + Math.cos(rad + rotation) * side} ${y + Math.sin(rad + rotation) * side}`;
        const l2 = `L ${x + Math.cos(-rad + rotation) * side} ${y + Math.sin(-rad + rotation) * side}`;
        return `M ${x} ${y} ${l1} ${l2} z`;
    }

    calcSelfLinkPath(x, y) {
        const bezierY = y - State.stateRadius;
        const y1 = bezierY - NewTransition.selfLinkHeight;
        const x2 = x - NewTransition.selfLinkHeight;
        const y2 = bezierY;
        return `M ${x} ${bezierY} C ${x} ${y1}, ${x2} ${y2}, ${x} ${bezierY}`;
    }

    calcTransitionLink(x1, y1, x2, y2, curve) {
        if (x1 === x2 && y1 === y2) {
            return {
                link: this.calcSelfLinkPath(x1, y1),
                pointer: this.calcPointerPath(x1, y1 - State.stateRadius, -Math.PI / 2),
            };
        }
        const theta = Math.atan((y2 - y1) / (x2 - x1));
        const sign = (theta > 0 ? -1 : 1) * (y2 > y1 ? -1 : 1);
        const fromX = x1 + sign * Math.cos(theta) * State.stateRadius;
        const fromY = y1 + sign * Math.sin(theta) * State.stateRadius;
        const toX = x2 + sign * -1 * Math.cos(theta) * State.stateRadius;
        const toY = y2 + sign * -1 * Math.sin(theta) * State.stateRadius;
        const midX = fromX + (toX - fromX) / 2;
        const midY = fromY + (toY - fromY) / 2;
        const pX = midX - curve * sign;
        const pY = midY + curve * sign;
        const pointerTheta = Math.atan((toY - pY) / (toX - pX));
        return {
            link: this.calcLinkPath(fromX, fromY, toX, toY, curve * sign),
            pointer: this.calcPointerPath(toX, toY, sign === -1 ? pointerTheta : Math.PI + pointerTheta),
        };
    }
}

NewTransition.selfLinkHeight = EDITOR_DEFAULTS.selfLinkHeight;
export default NewTransition;
