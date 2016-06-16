using Microsoft.AspNetCore.Mvc;

using System.IO;
using System.Diagnostics;

namespace SwiftChallenge.Controllers
{



    /// the swift execution controller

    [Route("api/swift")]
    public class SwiftExecutionController: Controller {

        /// the temporary directory
        const string TempDirectory = "./Temp";

        /// test running swift controller
        [HttpGet]
        public string Get() {

            if (!Directory.Exists(TempDirectory)) {
                Directory.CreateDirectory(TempDirectory);
            }

            var sourceFileName = TempDirectory + "/swiftfile.swift";
            var sourceFile = System.IO.File.CreateText(sourceFileName);
            sourceFile.WriteLine("print(\"Hello World\")");
            sourceFile.Flush();

            var process = new Process();
            process.StartInfo.FileName = "swift";
            process.StartInfo.UseShellExecute = true;
            process.StartInfo.Arguments = sourceFileName + " > output 2>&1";
            process.StartInfo.CreateNoWindow = true;

            process.Start();

            process.WaitForExit(3000);

            string output;
            if (process.HasExited) {
                output = System.IO.File.ReadAllText("output");
                if (process.ExitCode != 0) {
                    output = "Error: " + output;
                }
            } else {
                process.Kill();
                output = "Time out";
            }
            
            return output;
        }
    }    

}