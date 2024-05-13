import {FormInput2} from "./forminput2";
import {Checkbox} from "./checkbox";
import {FormButton} from "./formbutton";

export function Testform({attemptno}) {
  return (
    <form className="w-6/12 max-w-sm">
      <FormInput2 liftname={"Squat"} placeholder={"0"} attemptno={attemptno} />
      <FormInput2 liftname={"Bench"} placeholder={"0"} attemptno={attemptno} />
      <FormInput2
        liftname={"Deadlift"}
        placeholder={"0"}
        attemptno={attemptno}
      />

      <Checkbox />
      <FormButton type={"Submit"} value={"submit"} />
    </form>
  );
}
