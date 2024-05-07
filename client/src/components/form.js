import {LiftCard} from "./liftcard";
import {FormButton} from "./formbutton";

export function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <LiftCard liftType={"Squat"} opener={100} />
      <LiftCard liftType={"Bench Press"} opener={200} />
      <LiftCard liftType={"Deadlift"} opener={300} />
      <FormButton type={"submit"} value={"Submit"} />
      <FormButton type={"reset"} value={"Reset"} />
    </form>
  );
}
