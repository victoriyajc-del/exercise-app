import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

export default function App() {
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "duration" },
  ];

  const [selectedExercise, setSelectedExercise] = useState(null);

  // SCREEN 1: Menu
  if (selectedExercise === null) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Choose an Exercise</h1>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
          {exercises.map((ex) => (
            <button
              key={ex.name}
              onClick={() => setSelectedExercise(ex)}
              style={{ padding: "12px 16px", cursor: "pointer" }}
            >
              {ex.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // SCREEN 2: Exercise screen
  return (
    <div>
      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}

      {/* Optional but helpful */}
      <div style={{ padding: "0 24px 24px" }}>
        <button onClick={() => setSelectedExercise(null)} style={{ cursor: "pointer" }}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}
