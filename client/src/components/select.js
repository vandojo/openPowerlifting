export function Select({
  labeltxt,
  labelclasses,
  selectclasses,
  selectid,
  options,
  onchange,
  value,
}) {
  let data = options;
  let optgroups = [];
  // Each option needs to be mapped to a unique optgroup
  // the options belonging to that optgroup are then added as options
  Object.keys(data).map((opt) =>
    optgroups.push(
      <optgroup key={opt} label={opt}>
        {data[opt].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </optgroup>
    )
  );

  return (
    <div className="space-y-8 " data-slot="control">
      <div className="text-left [&>[data-slot=label]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=description]]:mt-1 [&>[data-slot=description]+[data-slot=control]]:mt-3 [&>[data-slot=control]+[data-slot=description]]:mt-3 [&>[data-slot=control]+[data-slot=error]]:mt-3 [&>[data-slot=label]]:font-medium">
        <label data-slot="label" className={labelclasses}>
          {labeltxt}
        </label>
        <span className=" relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)]  before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-purple-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
          <select
            id={selectid}
            name={value}
            className={selectclasses}
            onChange={onchange}
          >
            {optgroups}
          </select>
        </span>
      </div>
    </div>
  );
}
//
