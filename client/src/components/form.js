import {LiftCard} from "./liftcard";
import {FormSelect} from "./formselect";
import {FormButton} from "./formbutton";
import {useState} from "react";
import FlaskAPI from "./flaskAPI";

export function Form({onFormSubmit, formdata, setformdata}) {
  // state for form data

  const insertTest = () => {
    FlaskAPI.test(formdata).then((response) => console.log(response));
  };

  const [attemptData, setAttemptData] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let inputData = {...formdata};
    inputData[name] = value;
    setformdata(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData2 = new FormData(form);

    const formJson = Object.fromEntries(formData2.entries());
    setAttemptData([formJson]);
    onFormSubmit(attemptData);
    //console.log(formJson);
    onFormSubmit();
    //insertTest();
  };

  return (
    <form method="post" action="/predictSq" onSubmit={handleSubmit}>
      <LiftCard liftType={"Squat"} opener={100} onchange={handleChange} />
      <LiftCard liftType={"Bench Press"} opener={200} onchange={handleChange} />
      <LiftCard liftType={"Deadlift"} opener={300} onchange={handleChange} />
      <FormSelect />
      <FormButton type={"submit"} value={"Submit"} />
      <FormButton type={"reset"} value={"Reset"} />
    </form>
  );
}
