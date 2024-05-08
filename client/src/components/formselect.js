import {useState} from "react";
export function FormSelect() {
  const [selectedMetic, setSelectedMetric] = useState("Kg");
  // block uppercase tracking-wide text-gray-700  font-bold mb-2
  //
  return (
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-l font-bold mb-2">
        Unit
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="WeightMetric"
          value={selectedMetic}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="Kg">Kg</option>
          <option value="Lbs">Lbs</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
