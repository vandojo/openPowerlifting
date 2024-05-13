import {useState} from "react";
export function FormInput2({liftname, placeholder, attemptno}) {
  const [lift, setLift] = useState(placeholder);

  const attempts = [];

  for (let i = 1; i <= attemptno; i++) {
    let attempt = "";
    if (i === 1) {
      attempt = "1st";
    } else {
      attempt = "2nd";
    }

    let id = liftname + i;
    attempts.push(
      <div key={id} className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-white-500 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {attempt} attempt
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id={id}
          type="number"
          placeholder={placeholder}
          step="0.5"
          min="25"
          max="550"
        ></input>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-7">
        <label className="block text-white-500 font-bold md:text-center mb-1 md:mb-0 pr-4">
          {liftname}
        </label>
      </div>
      {attempts}
    </div>
  );
}
