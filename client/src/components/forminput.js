import {useState} from "react";

export function FormInput({label, placeholder, onchange, inputnumber}) {
  const [lift, setLift] = useState(placeholder);

  const handleChange = (e) => {
    setLift(e.target.value);
    onchange(e);
  };
  const inputs = [];

  for (let i = 0; i < inputnumber; i++) {
    inputs.push(
      <div key={i + label} className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            {label}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name={label}
            type="number"
            step="0.5"
            min="2.5"
            max="550"
            value={lift}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }

  return <>{inputs}</>;
}
