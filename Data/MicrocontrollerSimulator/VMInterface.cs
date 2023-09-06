using System;
using System.Runtime.InteropServices;
using System.Text;

namespace mcsim.Data.MicrocontrollerSimulator;

[UnmanagedFunctionPointer(CallingConvention.Cdecl)]
public delegate void MappedIOWrite(nint mapRecord);

public partial class VMInterface
{
    private const string Module = "VMInterface.dll";

    [DllImport("VMInterface.dll")] 
    public static extern void GetLastAsmLoc(nint VM, [MarshalAs(UnmanagedType.LPWStr)] StringBuilder sb, uint max_len);

    [LibraryImport("VMInterface.dll")]
    public static partial void Step(nint VM);

    [LibraryImport("VMInterface.dll")]
    public static partial nint CreateVM();

    [LibraryImport("VMInterface.dll")]
    public static partial void DestroyVM(nint VM, nint ThreadInfo);

    [LibraryImport("VMInterface.dll")] 
    public static partial void SetFilename(nint VM, [MarshalAs(UnmanagedType.LPWStr)] string filename);

    [LibraryImport("VMInterface.dll")] 
    public static partial void SetLccName(nint VM, [MarshalAs(UnmanagedType.LPWStr)] string filename);

    [LibraryImport("VMInterface.dll")] 
    public static partial void SetBaseDirectory(nint VM, [MarshalAs(UnmanagedType.LPWStr)] string dir);

    [DllImport("VMInterface.dll")] 
    public static extern void GetBaseDirectory(nint VM, [MarshalAs(UnmanagedType.LPWStr)] StringBuilder sb, uint max_len);

    [LibraryImport("VMInterface.dll")] 
    public static partial int Compile(nint VM);

    [LibraryImport("VMInterface.dll")]
    public static partial int getCurrentLine(nint VM, [MarshalAs(UnmanagedType.Bool)] bool isAsm);

    [LibraryImport("VMInterface.dll")] 
    public static partial void executeInstruction(nint VM, int opcode, [MarshalAs(UnmanagedType.LPWStr)] string arg1, [MarshalAs(UnmanagedType.LPWStr)] string arg2,[MarshalAs(UnmanagedType.LPWStr)] string arg3, nint result);

    [LibraryImport("VMInterface.dll")] 
    public static partial int Assemble(nint VM);

    [LibraryImport("VMInterface.dll")] 
    public static partial void setExternal(nint VM, [MarshalAs(UnmanagedType.Bool)] bool val);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetErrors(nint VM, nint Errors);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint Initialize(nint VM, nint init_struct);


    [LibraryImport("VMInterface.dll")] 
    public static partial void ResetVM(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial void Run(nint VM, nint ThreadInfo);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte GetPin(nint VM, Pins which);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte SetPin(nint VM, Pins which, byte what);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetTimerPeriod(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetTimerValue(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial void SetIPP(nint VM, uint ipp);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte IsUARTEnabled(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte GetUARTTx(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte GetUARTRx(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetNumDebugCharsWaiting(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte GetNextDebugChar(nint VM);


    [DllImport("VMInterface.dll")] 
    public static extern uint GetNextDebugBuffer(nint VM, [MarshalAs(UnmanagedType.LPStr)] StringBuilder sb, uint len);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte IsRunning(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte SetUnBroken(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial int GetIPS(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial double GetBatteryCharge(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial void ResetBatteryCharge(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte IsUARTReady(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte IsUARTDone(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial void SendToUART(nint VM, byte data);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte ReceiveFromUART(nint VM);


    [DllImport("VMInterface.dll")] 
    public static extern void SendToInput(nint VM, char[] data, uint size);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetSymbol(nint VM, int which, nint symbol_record);


    [LibraryImport("VMInterface.dll")] 
    public static partial int GetSymbolIndex(nint VM, [MarshalAs(UnmanagedType.LPStr)] string sb);


    [LibraryImport("VMInterface.dll")] 
    public static partial void GenerateSignalLog(nint VM, [MarshalAs(UnmanagedType.LPWStr)] string filename);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetData(nint VM, ushort addr, MemoryWidth width);


    [LibraryImport("VMInterface.dll")] 
    public static partial void SetData(nint VM, ushort addr, MemoryWidth width, ulong data);


    [LibraryImport("VMInterface.dll")] 
    public static partial void AddBreakpoint(nint VM, uint line);


    [LibraryImport("VMInterface.dll")] 
    public static partial void RemoveBreakpoint(nint VM, uint line);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte IsBroken(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte AtBreakpoint(nint VM);


    [LibraryImport("VMInterface.dll")]
    public static partial uint GetLine(nint VM, nint tagstruct);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint GetElapsedCycles(nint VM);


    [LibraryImport("VMInterface.dll", EntryPoint = "BreakImmediately")] 
    public static partial void Break(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial uint Continue(nint VM);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte SetStepModeVM(nint VM, [MarshalAs(UnmanagedType.Bool)] bool AStep);


    [LibraryImport("VMInterface.dll")] 
    public static partial byte SetNestedInterrupts(nint VM, [MarshalAs(UnmanagedType.Bool)] bool enable);


    [LibraryImport("VMInterface.dll")] 
    public static partial void SetASMMode(nint VM, [MarshalAs(UnmanagedType.Bool)] bool is_asm_mode);


    [LibraryImport("VMInterface.dll")] 
    public static partial void RegisterSymbol(nint VM, nint symbol_record);


    [LibraryImport("VMInterface.dll")] 
    public static partial void SetMappedIOWrite(nint VM, MappedIOWrite cb);
}
