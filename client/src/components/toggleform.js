import {Testform} from "./testform.js";
import {useState} from "react";

export function ToggleForm() {
  const [toggle, setToggle] = useState(true);
  const oneAttempt = "Plan next attempt";
  const multiAttempt = "Plan all  attempts";

  const handleClick = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={handleClick}>
        {toggle ? oneAttempt : multiAttempt}
      </button>

      <>{toggle ? <Testform attemptno={1} /> : <Testform attemptno={2} />}</>
    </>
  );
}
