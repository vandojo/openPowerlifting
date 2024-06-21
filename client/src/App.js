import "./App.css";
import {useState} from "react";
import {Layout} from "./layout.js";

function App() {
  const [formData, setFormData] = useState({
    "Squat 1": "0",
    "Squat 2": "0",
    "Bench press 1": "0",
    "Bench press 2": "0",
    "Deadlift 1": "0",
    "Deadlift 2": "0",
    Weightclass: "59",
    Weightmetric: true,
  });

  const [predictions, setPredictions] = useState({
    Squat: [
      {val: 0, id: 0},
      {val: 0, id: 1},
      {val: 0, id: 2},
    ],
    "Bench Press": [
      {val: 0, id: 0},
      {val: 0, id: 1},
      {val: 0, id: 2},
    ],
    Deadlift: [
      {val: 0, id: 0},
      {val: 0, id: 1},
      {val: 0, id: 2},
    ],
    madePrediction: false,
    Weightclass: "59",
  });

  return (
    <div className="App dark:bg-zinc-950 h-full w-full">
      <header className="App-header flex-row grid grid-rows-2 grid-flow-col gap-4">
        <Layout
          formdata={formData}
          setformdata={setFormData}
          setpredictions={setPredictions}
          data={predictions}
        />
      </header>
    </div>
  );
}

export default App;
