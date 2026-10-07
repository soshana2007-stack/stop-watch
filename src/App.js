import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime(time => time + 1);
      }, 100);
    }

    return () => clearInterval(timer.current);
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const pause = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="app">
      <div className="stopwatch">
        <h1>Stopwatch</h1>

        <div className="time">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        <p>{running ? "Running" : "Paused"}</p>

        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>

        <h3>Time: {time} seconds</h3>
      </div>
    </div>
  );
}

export default App;

