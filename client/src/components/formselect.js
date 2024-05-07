export function FormSelect({parent}) {
  return (
    <label>
      <select name={parent + "WeightMetric"} defaultValue="Kg">
        <option value="Kg">Kg</option>
        <option value="Lbs">Lbs</option>
      </select>
    </label>
  );
}
