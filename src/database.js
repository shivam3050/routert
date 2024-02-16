import { exec } from 'child_process';

// Replace 'your_executable' with the name of your C executable file
const executableName = './backendsexecutable';

exec(executableName, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing ${executableName}: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
