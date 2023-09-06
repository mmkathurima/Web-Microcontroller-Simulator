using System.Runtime.InteropServices;
using System;

namespace mcsim.Data.MicrocontrollerSimulator;

[StructLayout(LayoutKind.Sequential, Pack = 8)]
public struct ErrorStruct
{
    [MarshalAs(UnmanagedType.ByValArray, SizeConst = 256)]
    public nint[] errors;
}