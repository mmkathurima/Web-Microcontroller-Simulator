// AStyleInterface.cs

using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
namespace mcsim.Data.MicrocontrollerSimulator;
/// AStyleInterface contains methods to call the Artistic Style formatter.
public partial class AStyleInterface
{
    // Dll name
    private const string dllName = "AStyle.dll";

    /// AStyleGetVersion DllImport.
    /// Cannot use String as a return value because Mono runtime will attempt to
    /// free the returned pointer resulting in a runtime crash.
    /// NOTE: CharSet.Unicode is NOT used here.
    [LibraryImport(dllName)]
    private static partial nint AStyleGetVersion();

    /// AStyleMainUtf16 DllImport.
    /// Cannot use String as a return value because Mono runtime will attempt to
    /// free the returned pointer resulting in a runtime crash.
    /// NOTE: CharSet.Unicode and wide strings are used here.
    [LibraryImport(dllName, StringMarshalling = StringMarshalling.Utf16)]
    private static partial nint AStyleMainUtf16(
        [MarshalAs(UnmanagedType.LPWStr)] string sIn,
        [MarshalAs(UnmanagedType.LPWStr)] string sOptions,
        AStyleErrorDelgate errorFunc,
        AStyleMemAllocDelgate memAllocFunc
    );

    /// AStyleMainUtf16 callbacks.
    /// NOTE: Wide strings are NOT used here.
    private delegate nint AStyleMemAllocDelgate(int size);
    private delegate void AStyleErrorDelgate(
        int errorNum,
        [MarshalAs(UnmanagedType.LPStr)] string error
    );

    /// AStyleMainUtf16 Delegates.
    private AStyleMemAllocDelgate AStyleMemAlloc;
    private AStyleErrorDelgate AStyleError;

    /// Declare callback functions.
    public AStyleInterface()
    {
        AStyleMemAlloc = new AStyleMemAllocDelgate(OnAStyleMemAlloc);
        AStyleError = new AStyleErrorDelgate(OnAStyleError);
    }

    /// Call the AStyleMainUtf16 function in Artistic Style.
    /// An empty string is returned on error.
    public string FormatSource(string textIn, string options)
    {
        // Return the allocated string
        // Memory space is allocated by OnAStyleMemAlloc, a callback function
        string sTextOut = string.Empty;
        try
        {
            nint pText = AStyleMainUtf16(textIn, options, AStyleError, AStyleMemAlloc);
            if (pText != nint.Zero)
            {
                sTextOut = Marshal.PtrToStringUni(pText);
                Marshal.FreeHGlobal(pText);
            }
        }
        catch (BadImageFormatException e)
        {
            string message = e.ToString() + "\r\n\r\n" + "You may be mixing 32 and 64 bit code!";
            throw;
        }
        catch (DllNotFoundException)
        {
            throw;
            //Environment.Exit(1);
        }
        catch (Exception e)
        {
            throw;
        }
        return sTextOut;
    }

    /// Get the Artistic Style version number.
    /// Does not need to terminate on error.
    /// But the exception must be handled when a function is called.
    public string GetVersion()
    {
        string sVersion = string.Empty;
        try
        {
            nint pVersion = AStyleGetVersion();
            if (pVersion != nint.Zero)
            {
                sVersion = Marshal.PtrToStringAnsi(pVersion);
            }
        }
        catch (BadImageFormatException e)
        {
            string message = e.ToString() + "\r\n\r\n" + "You may be mixing 32 and 64 bit code!";
            throw;
        }
        catch (DllNotFoundException)
        {
            throw;
        }
        catch (Exception e)
        {
            throw;
        }
        return sVersion;
    }

    /// Allocate the memory for the Artistic Style return string.
    private nint OnAStyleMemAlloc(int size)
    {
        return Marshal.AllocHGlobal(size);
    }

    /// Display errors from Artistic Style .
    private void OnAStyleError(int errorNumber, String errorMessage)
    {
        Debug.WriteLine("AStyle error " + errorNumber + "\n" + errorMessage);
    }

}   // class AStyleInterface