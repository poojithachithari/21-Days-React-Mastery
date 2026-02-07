import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handledecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={handledecrement}>Decrement</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
