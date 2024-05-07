import {useState} from "react";

export function FormInput({label, placeholder, onchange}) {
  const [lift, setLift] = useState(placeholder);

  const handleChange = (e) => {
    setLift(e.target.value);
    onchange(e);
  };

  return (
    <label>
      {label}
      <input
        name={label}
        type="text"
        value={lift}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
}
