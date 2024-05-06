import "./App.css";
import {Form} from "./components/form.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form liftType={"Squat"} attemptNo={"First"} />
        <Form liftType={"Squat"} attemptNo={"Second"} />
        <Form liftType={"Squat"} attemptNo={"Third"} />
      </header>
    </div>
  );
}

export default App;
