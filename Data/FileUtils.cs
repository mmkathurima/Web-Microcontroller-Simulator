using Microsoft.AspNetCore.Components;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System;
using Microsoft.JSInterop;
using KristofferStrube.Blazor.FileSystemAccess;
using KristofferStrube.Blazor.FileSystem;

namespace mcsim.Data
{
    public class FileUtils
    {
        public string FileText { get; set; }
        public FileSystemFileHandle FileHandle { get; set; }

        public async Task OpenFilePicker(IFileSystemAccessService FileSystemAccessService)
        {
            try
            {
                FileHandle = await FileSystemAccessService.ShowSaveFilePickerAsync(new SaveFilePickerOptionsStartInFileSystemHandle()
                {
                    Types = new FilePickerAcceptType[] {
                        new() {
                            Description = "C Source file",
                            Accept = new() { { "text/c", new string[] { ".c" } } }
                        }
                    }
                });
            }
            catch (JSException ex)
            {
                Debug.WriteLine(ex);
            }
            finally
            {
                if (FileHandle != null)
                {
                    var file = await FileHandle.GetFileAsync();
                    FileText = await file.TextAsync();
                }
            }
        }

    }
}
