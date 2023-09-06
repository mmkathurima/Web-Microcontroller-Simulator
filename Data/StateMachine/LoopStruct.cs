namespace mcsim.Data.StateMachine
{
    public struct LoopStruct
    {
        public string Initial { get; set; }
        public string Condition { get; set; }
        public string Update { get; set; }
        public string ConditionCVar { get; set; }
        public string UpdateCVar { get; set; }
        public string LoopVar { get; set; }

        public LoopStruct(string initial, string condition, string update, string conditionCVar, string updateCVar, string loopVar)
        {
            Initial = initial;
            Condition = condition;
            Update = update;
            ConditionCVar = conditionCVar;
            UpdateCVar = updateCVar;
            LoopVar = loopVar;
        }
    }
}