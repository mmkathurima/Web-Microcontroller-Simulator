using System.Collections.Generic;

namespace mcsim.Data.StateMachine
{
    public class Graph
    {
        public string Abbrv { get; }
        public List<Node> Nodes { get; set; }
        public string Name { get; set; }
        public string Period { get; }
        public List<Edge> Edges { get; set; }
        public Edge InitEdge { get; set; }
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
