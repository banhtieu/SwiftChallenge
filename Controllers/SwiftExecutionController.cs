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

        /// create the temporary directory
        public void CreateTemporaryDirectory() {
            if (!Directory.Exists(TempDirectory)) {
                Directory.CreateDirectory(TempDirectory);
            }
        }

        /// write the source file
        private string WriteSourceFile(string body) {
            var sourceFileName = TempDirectory + "/swiftfile.swift";
            var sourceFile = System.IO.File.CreateText(sourceFileName);
            sourceFile.WriteLine(body);
            sourceFile.Flush();

            return sourceFileName;
        }

        /// execute the source files
        private string Execute(string sourceFileName) {

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
                    output = "{ error: \"" + output + "\"}";
                }
            } else {
                process.Kill();
                output = "{ error: \"Time out\"}";
            }
            
            return output;
        }

        /// post the solution
        [HttpPost]
        public string PostSolution(string body) {
            CreateTemporaryDirectory();
            var fileName = WriteSourceFile(body);

            return Execute(fileName);
        }
    }    

}