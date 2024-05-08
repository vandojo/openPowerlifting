export function Checkbox() {
  return (
    <div className="md:flex md-items-center mb-6">
      <div className="md:w-1/3"></div>
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input
          defaultChecked
          className="mr-2 leading-tight "
          type="checkbox"
          name="on"
        />
        <span className="text-sm">Uncheck if numbers are in pounds!</span>
      </label>
    </div>
  );
}
