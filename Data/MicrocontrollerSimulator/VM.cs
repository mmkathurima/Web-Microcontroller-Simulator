using System.Reflection;
using System;

namespace mcsim.Data.MicrocontrollerSimulator;

public class VM : IDisposable
{
    public nint vm, ts;

    public VM()
    {
        vm = VMInterface.CreateVM();
        string[] array = Assembly.GetExecutingAssembly().Location.Split('\\');
        string location = "";

        for (uint num = 0u; array.Length > 1 && num < array.Length - 1; num++)
        {
            location += array[num];
            if (array.Length <= 2 || num != array.Length - 2)
                location += "\\";
        }
        VMInterface.SetBaseDirectory(vm, location);
    }
    public void Dispose()
    {
        try
        {
            if (ts != nint.Zero)
                VMInterface.DestroyVM(vm, ts);
        }
        catch
        {
            throw;
        }
    }
}
