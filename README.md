
# Exercise App (React + Vite)

This project is a simple exercise tracking application built with **React** and **Vite**. The app allows users to select an exercise from a menu and interact with it based on the exercise type. It demonstrates state management, conditional rendering, and component-based design in React.

## Features

- A main menu screen with selectable exercises
- Two reusable exercise components:
  - **RepetitionExercise** – tracks repetitions using an internal counter
  - **DurationExercise** – tracks time using a running timer
- Exercise name is passed as a prop and displayed at the top of each screen
- Conditional rendering to switch between the menu and exercise views
- Timer values are formatted with padded digits (e.g., `00:05`)

## Project Structure


src/
├─ App.jsx
├─ components/
│ ├─ RepetitionExercise/
│ │ └─ index.jsx
│ └─ DurationExercise/
│ └─ index.jsx


## How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/victoriyajc-del/exercise-app.git
cd exercise-app

Install Node
and
npm run dev


http://localhost:5173/





