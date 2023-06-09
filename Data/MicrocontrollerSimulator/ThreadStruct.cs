using System.Runtime.InteropServices;
using System;

namespace mcsim.Data.MicrocontrollerSimulator;
[StructLayout(LayoutKind.Sequential, Pack = 8)]
public struct ThreadStruct
{
    private nint handle;

    private uint tid;
}
