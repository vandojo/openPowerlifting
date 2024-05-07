import "./App.css";
import {useState} from "react";
import {Form} from "./components/form.js";
import {Table} from "./components/table.js";
import FlaskAPI from "./components/flaskAPI.js";

function App() {
  const [formData, setFormData] = useState({
    Squat: "",
    "Bench Press": "",
    Deadlift: "",
    WeightMetric: "",
  });

  const [predictions, setPredictions] = useState([]);

  const handlePredictions = (response) => {
    console.log("a new one");
    //setPredictions(...response);
    setPredictions(response.Prediction);
    console.log(predictions);
  };

  const testSquat = () => {
    FlaskAPI.squat(formData).then((response) => {
      //console.log(response);
      handlePredictions(response);
    });
  };
  const attempts = [
    {
      id: 0,
      liftName: "Squat",
      firstAttempt: 175,
      secondAttempt: 185,
      thirdAttempt: 195,
    },
    {
      id: 1,
      liftName: "Bench press",
      firstAttempt: 175,
      secondAttempt: 185,
      thirdAttempt: 195,
    },
    {
      id: 2,
      liftName: "Deadlift",
      firstAttempt: 175,
      secondAttempt: 185,
      thirdAttempt: 195,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Form
          onFormSubmit={testSquat}
          formdata={formData}
          setformdata={setFormData}
        />

        <Table attempts={attempts} />
      </header>
    </div>
  );
}

export default App;
