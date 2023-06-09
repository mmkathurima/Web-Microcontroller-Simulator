using System.Text.Json.Serialization;

namespace mcsim.Data.StateMachine
{
    public class Edge
    {
        public string Condition { get; set; }
        public Node Head { get; set; }
        public Node Tail { get; set; }
        public int Priority { get; set; }
        public string Actions { get; set; }

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
