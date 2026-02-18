import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";

const FlushSyncDemo = () => {
  const [count, setCount] = useState(0);
  const countDisplayRef = useRef(null);

  const incrementNormal = () => {
    console.log(
      "Before SetState - DOM shows:",
      countDisplayRef.current.textContent,
    );
    setCount(count + 1);
    console.log(
      "AFTER setState - DOM shows:",
      countDisplayRef.current.textContent,
    );
  };

  const incrementWithFlushSync = () => {
    console.log("=== WITH FLUSHSYNC ===");
    console.log(
      "BEFORE setState - DOM shows:",
      countDisplayRef.current.textContent,
    );
    flushSync(() => {
      setCount(count + 1);
    });
    console.log(
      "AFTER flushSync - DOM shows:",
      countDisplayRef.current.textContent,
    );
    console.log("(DOM updated immediately!)");
  };
  return (
    <div style={{ padding: "20px" }}> 
    {/* Check Console for the happening changes */}
      <h1>⚡ Understanding flushSync</h1>
      <h2 ref={countDisplayRef}>Current Count: {count}</h2>
      <button
        onClick={incrementNormal}
        style={{ padding: "10px", marginRight: "10px" }}
      >
        Increment (Normal)
      </button>
      <button
        onClick={incrementWithFlushSync}
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
        }}
      >
        Increment (With flushSync)
      </button>
    </div>
  );
};

export default FlushSyncDemo;
