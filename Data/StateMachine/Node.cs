using System;
using System.Text.Json.Serialization;

namespace mcsim.Data.StateMachine
{
    public class Node
    {
        public string Name { get; set; }
        public bool ForLoopEnabled { get; }
        public LoopStruct Loop { get; set; }
        public bool PriorityEnabled { get; }
        [JsonPropertyName("actions")]
        public string Actions { get; }

        [JsonConstructor]
        public Node(string name, bool forLoopEnabled, LoopStruct loop, bool priorityEnabled, string actions)
        {
            this.Name = name;
            this.ForLoopEnabled = forLoopEnabled;
            this.Loop = loop;
            this.PriorityEnabled = priorityEnabled;
            this.Actions = actions;
        }
    }
}
