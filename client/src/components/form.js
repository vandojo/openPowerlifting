import {FormInput} from "./forminput";

export function Form({attemptNo, liftType}) {
  return (
    <form>
      <FormInput attemptNo={attemptNo} liftType={liftType} />
    </form>
  );
}
