import {FormInput} from "./forminput";

export function LiftCard({liftType, opener = 0, onchange, inputnumber}) {
  return (
    <FormInput
      label={liftType}
      placeholder={opener}
      onchange={onchange}
      inputnumber={inputnumber}
    />
  );
}
