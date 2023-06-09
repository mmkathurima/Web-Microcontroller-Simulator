using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode, Pack = 8)]
public struct TagStruct
{
    [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 256)]
    public string File;

    public int line;

    public int ALine;
}
