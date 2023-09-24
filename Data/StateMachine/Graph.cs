using System.Collections.Generic;

namespace mcsim.Data.StateMachine
{
    public class Graph
    {
        public string Abbrv { get; }
        public List<Node> Nodes { get; }
        public string Name { get; }
        public string Period { get; }
        public List<Edge> Edges { get; }
        public Edge InitEdge { get; }
        public string GlobalCode { get; }
        public string InitialStateName { get; }
        public int NumStates => Nodes.Count;

        public Graph(string abbrv, List<Node> nodes, string name, string period, List<Edge> edges, Edge initEdge, string globalCode, string initialStateName)
        {
            this.Abbrv = abbrv;
            this.Nodes = nodes;
            this.Name = name;
            this.Period = period;
            this.Edges = edges;
            this.InitEdge = initEdge;
            this.GlobalCode = globalCode;
            this.InitialStateName = initialStateName;
        }
    }
}
