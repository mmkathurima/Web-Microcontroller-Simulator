using System.Runtime.InteropServices;
using System;

namespace mcsim.Data.MicrocontrollerSimulator
{
    public partial class TimerInterface
    {
        public static uint INFINITE = 268435455u;

        [LibraryImport("winmm.dll")]
        public static partial uint timeBeginPeriod(uint period);

        [LibraryImport("winmm.dll")]
        public static partial uint timeEndPeriod(uint period);

        [LibraryImport("winmm.dll")]
        public static partial uint timeSetEvent(uint delay, uint resolution, nint callback, nint user, uint Event);

        [LibraryImport("winmm.dll")] 
        public static partial uint timeKillEvent(uint timer_id);

        [LibraryImport("kernel32.dll", StringMarshalling = StringMarshalling.Utf16)]
        public static partial IntPtr GetModuleHandle(string lpModuleName);

        [LibraryImport("kernel32.dll", SetLastError = true, StringMarshalling = StringMarshalling.Custom, StringMarshallingCustomType = typeof(System.Runtime.InteropServices.Marshalling.AnsiStringMarshaller))]
        public static partial IntPtr GetProcAddress(nint hModule, string procName);

        [DllImport("kernel32.dll")]
        public static extern IntPtr CreateWaitableTimer(nint lpTimerAttributes, bool bManualReset, string lpTimerName);

        [LibraryImport("kernel32.dll")]
        [return: MarshalAs(UnmanagedType.Bool)]
        public static partial bool SetWaitableTimer(nint hTimer, ref long pDueTime, int lPeriod, nint pfnCompletionRoutine, nint lpArgToCompletionRoutine, [MarshalAs(UnmanagedType.Bool)] bool fResume);

        [LibraryImport("kernel32", SetLastError = true)]
        public static partial int WaitForSingleObject(nint handle, int milliseconds);

        [LibraryImport("kernel32.dll")]
        public static partial uint SleepEx(uint dwMilliseconds, [MarshalAs(UnmanagedType.Bool)] bool bAlertable);
    }
}
