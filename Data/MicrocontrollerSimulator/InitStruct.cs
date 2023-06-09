using System.Runtime.InteropServices;
using System;

namespace mcsim.Data.MicrocontrollerSimulator
{
    [StructLayout(LayoutKind.Sequential, Pack = 8)]
    public struct InitStruct
    {
        public nint clock { get; set; }
        public nint breakpoint_pulse { get; set; }
    }
}
