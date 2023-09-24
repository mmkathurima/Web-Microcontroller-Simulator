using System;

namespace mcsim.Data;

public class DiagramSettings
{
    public int YDelta { get; }
    public int YSpacing { get; }
    public bool ShowStartLine { get; }
    public bool ShowStopLine { get; }

    public DiagramSettings(int yDelta, int ySpacing, bool showStartLine, bool showStopLine)
    {
        this.YDelta = yDelta;
        this.YSpacing = ySpacing;
        this.ShowStartLine = showStartLine;
        this.ShowStopLine = showStopLine;
    }

    public override bool Equals(object obj)
    {
        return obj is DiagramSettings other &&
               this.YDelta == other.YDelta &&
               this.YSpacing == other.YSpacing &&
               this.ShowStartLine == other.ShowStartLine &&
               this.ShowStopLine == other.ShowStopLine;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(this.YDelta, this.YSpacing, this.ShowStartLine, this.ShowStopLine);
    }
}