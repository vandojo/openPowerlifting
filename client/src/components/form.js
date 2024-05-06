import {useState} from "react";

export function Form() {
  const [squatOpener, setSquatOpener] = useState("");

  const handleChange = (e) => {
    setSquatOpener(e.target.value);
  };

  return (
    <form>
      <label>
        Enter Your Squat Opener:
        <input type="text" value={squatOpener} onChange={handleChange} />
      </label>
    </form>
  );
}
