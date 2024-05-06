import {useState} from "react";

export function FormInput({attemptNo, liftType}) {
  const [lift, setLift] = useState("");

  const handleChange = (e) => {
    setLift(e.target.value);
    console.log(lift);
  };

  return (
    <label>
      {attemptNo} attempt
      <input
        type="text"
        value={lift}
        onChange={handleChange}
        placeholder={liftType}
      />
    </label>
  );
}
