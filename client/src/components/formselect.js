import {useState} from "react";
export function FormSelect() {
  const [selectedMetic, setSelectedMetric] = useState("Kg");
  return (
    <label>
      <select
        name="WeightMetric"
        value={selectedMetic}
        onChange={(e) => setSelectedMetric(e.target.value)}
      >
        <option value="Kg">Kg</option>
        <option value="Lbs">Lbs</option>
      </select>
    </label>
  );
}
