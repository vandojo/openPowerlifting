import {FormInput} from "./forminput";
import {FormSelect} from "./formselect";

export function LiftCard({liftType, opener = 0}) {
  return (
    <div className="card">
      <FormInput label={liftType} placeholder={opener} />
      <FormSelect parent={liftType} />
    </div>
  );
}
