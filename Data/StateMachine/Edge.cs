using System.Text.Json.Serialization;

namespace mcsim.Data.StateMachine
{
    public class Edge
    {
        public string Condition { get; }
        public Node Head { get; }
        public Node Tail { get; }
        public int Priority { get; }
        public string Actions { get; }

        [JsonConstructor]
        public Edge(string condition, Node head, Node tail, int priority, string actions)
        {
            this.Condition = condition;
            this.Head = head;
            this.Tail = tail;
            this.Priority = priority;
            this.Actions = actions;
        }
    }
}
