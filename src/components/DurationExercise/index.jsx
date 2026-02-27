import { useEffect, useState } from "react";

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const time =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  return (
    <div style={{ padding: 24 }}>
      <h1>{name}</h1>

      <p style={{ fontSize: 48 }}>{time}</p>

      {!running ? (
        <button onClick={() => setRunning(true)} style={{ marginRight: 10 }}>
          Start
        </button>
      ) : (
        <button onClick={() => setRunning(false)} style={{ marginRight: 10 }}>
          Stop
        </button>
      )}

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}