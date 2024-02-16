const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 by default

// Endpoint to execute the backend executable
app.post('/execute-backend', (req, res) => {
    const executableName = './backendsexecutable';
    
    exec(executableName, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ${executableName}: ${error}`);
            res.status(500).send('Error executing backend executable');
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send('Backend executable executed successfully');
    });
});

// Endpoint to run the C file
app.post('/run-c-file', (req, res) => {
    const cFileName = './backendexecutable'; // Replace with the path to your C file
    exec(cFileName, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ${cFileName}: ${error}`);
            res.status(500).send('Error executing C file');
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send('C file executed successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
