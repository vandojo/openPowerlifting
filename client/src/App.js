import "./App.css";
import {useState} from "react";
import {Form} from "./components/form.js";
import {Table} from "./components/table.js";

function App() {
  const [formData, setFormData] = useState("");

  const handleFormData = (data) => {
    setFormData(data);
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
        <Form onFormSubmit={handleFormData} />
        <p>{formData == "" ? "submit a form" : console.log(formData)}</p>
        <Table attempts={attempts} />
      </header>
    </div>
  );
}

export default App;
