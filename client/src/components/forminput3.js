import {useState} from "react";
export function Forminput3({
  min,
  max,
  step,
  type,
  inputclasses,
  placeholder,
  labelclasses,
  spanclasses,
  liftname,
  inputno,
  onchange,
}) {
  let lifts = {};
  lifts[liftname + " 1"] = placeholder;
  lifts[liftname + " 2"] = placeholder;

  const [lift, setLift] = useState(lifts);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let currentState = {...lift};
    currentState[name] = value;

    setLift(currentState);

    onchange(e);
  };

  let inputElements = [];

  for (let i = 1; i <= inputno; i++) {
    let id = liftname + " " + i;

    inputElements.push(
      <div key={id} className="space-y-8" data-slot="control">
        <div className="text-left ">
          <label data-slot="label" className={labelclasses} htmlFor={id}>
            {id}
          </label>
          <span className={spanclasses}>
            <input
              id={id}
              name={id}
              className={inputclasses}
              placeholder={placeholder}
              min={min}
              max={max}
              step={step}
              type={type}
              onChange={handleChange}
            ></input>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="  grid grid-cols-2 gap-4" role="group">
      {inputElements}
    </div>
  );
}
//
