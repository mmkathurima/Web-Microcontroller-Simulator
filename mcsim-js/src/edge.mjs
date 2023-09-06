export default class Edge {
    constructor(condition, head, tail, priority, actions) {
        this._condition = condition;
        this._head = head;
        this._tail = tail;
        this._priority = priority;
        this._actions = actions;
    }

    get condition() {
        return this._condition;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    get priority() {
        return this._priority;
    }

    get actions() {
        return this._actions;
    }
}
