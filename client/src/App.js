import "./App.css";
import {useState} from "react";
import {Form} from "./components/form.js";
import {Table} from "./components/table.js";

function App() {
  const [formData, setFormData] = useState({
    Squat: "",
    "Bench Press": "",
    Deadlift: "",
  });

  const [predictions, setPredictions] = useState({madePrediction: false});

  return (
    <div className="App">
      <header className="App-header flex flex-row grid grid-rows-2 grid-flow-col gap-4">
        <Form
          formdata={formData}
          setformdata={setFormData}
          setPredictions={setPredictions}
          inputnumber={1}
        />

        <Table
          attempts={predictions}
          containspredictions={predictions.madePrediction}
          colnames={["Lift, First, Second, Third"]}
        />
      </header>
    </div>
  );
}

export default App;
//
