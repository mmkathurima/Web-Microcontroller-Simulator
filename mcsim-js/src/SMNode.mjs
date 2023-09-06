export default class SMNode {
    constructor(Name, forloop_enabled, loop, priority_enabled, Actions) {
        this._Name = Name;
        this._forloop_enabled = forloop_enabled;
        this._loop = loop;
        this._priority_enabled = priority_enabled;
        this._Actions = Actions;
    }

    get Name() {
        return this._Name;
    }

    set Name(value) {
        this._Name = value;
    }

    get forloop_enabled() {
        return this._forloop_enabled;
    }

    get loop() {
        return this._loop;
    }

    set loop(value) {
        this._loop = value;
    }

    get priority_enabled() {
        return this._priority_enabled;
    }

    get Actions() {
        return this._Actions;
    }
}
