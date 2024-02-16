import React, { useState } from "react";
import axios from "axios";
import "./index.css";
function Imfunction() {
    const [executing, setExecuting] = useState(false);

    const handleRunCFile = () => {
        setExecuting(true);
        axios.post("/run-c-file") // Corrected endpoint
            .then(response => {
                console.log(response.data);
                setExecuting(false);
            })
            .catch(error => {
                console.error("Error running C file:", error);
                setExecuting(false);
            });
    };

    return (
        <div>
            <h1 className="text-slate-50">React Imfunction</h1>
            <button className="text-slate-50-" onClick={handleRunCFile} disabled={executing}>
                {executing ? "Executing..." : "Run C File"}
            </button>
        </div>
    );
}

export default Imfunction;
