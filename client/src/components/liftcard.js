import {FormInput} from "./forminput";

export function LiftCard({liftType, opener = 0, onchange}) {
  return (
    <div className="card">
      <FormInput label={liftType} placeholder={opener} onchange={onchange} />
    </div>
  );
}
