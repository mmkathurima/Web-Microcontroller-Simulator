namespace mcsim.Data.StateMachine
{
    public struct LoopStruct
    {
        public string Initial { get; }
        public string Condition { get; }
        public string Update { get; }
        public string ConditionCVar { get; set; }
        public string UpdateCVar { get; set; }
        public string LoopVar { get; set; }

        public LoopStruct(string initial, string condition, string update, string conditionCVar, string updateCVar, string loopVar)
        {
            this.Initial = initial;
            this.Condition = condition;
            this.Update = update;
            this.ConditionCVar = conditionCVar;
            this.UpdateCVar = updateCVar;
            this.LoopVar = loopVar;
        }
    }
}