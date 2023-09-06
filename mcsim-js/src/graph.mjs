export default class Graph {
    constructor(param = {
        Abbrv: "SM", nodes: [], Name: "State Machine", Period: "1000",
        edges: [], initedge: {actions: ``},
        GlobalCode: "/!*Define user variables and functions for this state machine here.*!/",
        InitialStateName: ``
    }) {
        this._Abbrv = param.Abbrv;
        this._nodes = param.nodes;
        this._Name = param.Name;
        this._Period = param.Period;
        this._edges = param.edges;
        this._initedge = param.initedge;
        this._GlobalCode = param.GlobalCode;
        this._InitialStateName = param.InitialStateName;
    }

    get Abbrv() {
        return this._Abbrv;
    }

    get nodes() {
        return this._nodes;
    }

    set nodes(value) {
        this._nodes = value;
    }

    get NumStates() {
        return this.nodes.length;
    }

    get Name() {
        return this._Name;
    }

    set Name(value) {
        this._Name = value;
    }

    get Period() {
        return this._Period;
    }

    get InitialStateName() {
        return this._InitialStateName;
    }

    get edges() {
        return this._edges;
    }

    set edges(value) {
        this._edges = value;
    }

    get initedge() {
        return this._initedge;
    }

    get GlobalCode() {
        return this._GlobalCode;
    }
}
