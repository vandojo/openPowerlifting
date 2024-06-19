export function Checkbox({txt, spanclasses, labelclasses, name, onchange}) {
  return (
    <div className="flex flex-wrap justify-between gap-2">
      <div className="flex items-center gap-2">
        <label className={labelclasses}>
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked
            name={name}
            onChange={onchange}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          <span className={spanclasses}>{txt}</span>
        </label>
      </div>
    </div>
  );
}
//
