using System.Runtime.InteropServices;

namespace mcsim.Data.MicrocontrollerSimulator;

[StructLayout(LayoutKind.Sequential, Pack = 8)]
public struct SymbolRecord
{
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 256)]
    public string Name;

    public uint Address { get; set; }

    public uint ContentLength { get; set; }

    public byte InDataSegment { get; set; }
}
