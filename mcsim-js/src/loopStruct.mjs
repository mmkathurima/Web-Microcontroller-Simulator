/* eslint-disable @typescript-eslint/camelcase */
export class LoopStruct {
    constructor(initial, condition, update, condition_cvar, update_cvar, loopvar) {
        this._initial = initial;
        this._condition = condition;
        this._update = update;
        this._condition_cvar = condition_cvar;
        this._update_cvar = update_cvar;
        this._loopvar = loopvar;
    }

    get initial() {
        return this._initial;
    }

    set initial(value) {
        this._initial = value;
    }

    get condition() {
        return this._condition;
    }

    set condition(value) {
        this._condition = value;
    }

    get update() {
        return this._update;
    }

    set update(value) {
        this._update = value;
    }

    get condition_cvar() {
        return this._condition_cvar;
    }

    set condition_cvar(value) {
        this._condition_cvar = value;
    }

    get update_cvar() {
        return this._update_cvar;
    }

    set update_cvar(value) {
        this._update_cvar = value;
    }

    get loopvar() {
        return this._loopvar;
    }

    set loopvar(value) {
        this._loopvar = value;
    }
}
