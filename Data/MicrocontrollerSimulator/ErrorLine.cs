using System;

namespace mcsim.Data.MicrocontrollerSimulator;

public class ErrorLine
{
    public int row { get; }
    public int column { get; }
    public string text { get; }
    public string type { get; }

    public ErrorLine(int row, int column, string text, string type)
    {
        this.row = row;
        this.column = column;
        this.text = text;
        this.type = type;
    }
    public override bool Equals(object obj)
    {
        return obj is ErrorLine other &&
               row == other.row &&
               column == other.column &&
               text == other.text &&
               type == other.type;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(row, column, text, type);
    }
}