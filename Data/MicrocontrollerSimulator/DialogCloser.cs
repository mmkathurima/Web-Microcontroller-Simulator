using System;
using System.Text;
using System.Runtime.InteropServices;

namespace mcsim.Data.MicrocontrollerSimulator;

public partial class DialogCloser : IDisposable
{
    private bool cancelled;
    public DialogCloser()
    {
        // Enumerate windows to find dialogs
        if (this.cancelled) return;
        EnumThreadWndProc callback = new EnumThreadWndProc(CheckWindow);
        EnumThreadWindows(GetCurrentThreadId(), callback, nint.Zero);
        GC.KeepAlive(callback);
    }

    public void Dispose()
    {
        this.cancelled = true;
    }

    private static bool CheckWindow(nint hWnd, nint lp)
    {
        // Checks if <hWnd> is a Windows dialog
        StringBuilder sb = new StringBuilder(260);
        GetClassName(hWnd, sb, sb.Capacity);
        if (sb.ToString() == "#32770")
        {
            // Close it by sending WM_CLOSE to the window
            SendMessage(hWnd, 0x0010, nint.Zero, nint.Zero);
        }
        return true;
    }

    // P/Invoke declarations
    private delegate bool EnumThreadWndProc(nint hWnd, nint lp);
    [LibraryImport("user32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool EnumThreadWindows(int tid, EnumThreadWndProc callback, nint lp);
    [LibraryImport("kernel32.dll")]
    private static partial int GetCurrentThreadId();
    [DllImport("user32.dll")]
    private static extern int GetClassName(nint hWnd, StringBuilder buffer, int buflen);
    [LibraryImport("user32.dll")]
    private static partial nint SendMessage(nint hWnd, int msg, nint wp, nint lp);
}
