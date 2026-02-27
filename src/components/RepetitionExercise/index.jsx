import { useState } from "react";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24 }}>
      <h1>{name}</h1>

      <p style={{ fontSize: 48 }}>{count}</p>

      <button onClick={() => setCount((c) => c + 1)} style={{ marginRight: 10 }}>
        +1
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}