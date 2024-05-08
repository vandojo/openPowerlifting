import {LiftCard} from "./liftcard";
import {FormButton} from "./formbutton";
import {Checkbox} from "./checkbox";
import FlaskAPI from "./flaskAPI";

export function Form({formdata, setformdata, setPredictions, inputnumber}) {
  const handlePredictions = (response) => {
    setPredictions(response.Prediction);
  };

  // Calls the server with the form data
  // need to rename this to generic function
  const getPredictions = () => {
    FlaskAPI.predict(formdata).then((response) => {
      handlePredictions(response);
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let inputData = {...formdata};
    inputData[name] = value;
    setformdata(inputData);
  };

  // This is the function that calls testSquat which calls the server
  const handleSubmit = (e) => {
    e.preventDefault();

    getPredictions();
  };

  return (
    <form
      method="post"
      className="basis-1/2  max-w-sm"
      action="/predictSq"
      onSubmit={handleSubmit}
    >
      <LiftCard
        liftType={"Squat"}
        opener={0}
        onchange={handleChange}
        inputnumber={inputnumber}
      />
      <LiftCard
        liftType={"Bench Press"}
        opener={0}
        onchange={handleChange}
        inputnumber={inputnumber}
      />
      <LiftCard
        liftType={"Deadlift"}
        opener={0}
        onchange={handleChange}
        inputnumber={inputnumber}
      />
      <Checkbox />

      <FormButton type={"submit"} value={"Submit"} />
    </form>
  );
}
