import {Checkbox} from "./checkbox2";

import {Select} from "./select";

export function Weightblock({onchange}) {
  return (
    <div
      className=" [&>[data-slot=text]]mt-1 grid grid-cols-2 gap-4"
      role="group"
    >
      <Checkbox
        txt={"Weights are in kilos"}
        spanclasses={
          "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        }
        labelclasses={"inline-flex items-center me-5 cursor-pointer"}
        name={"Weightmetric"}
        onchange={onchange}
      />

      <Select
        labeltxt={"Weight class"}
        onchange={onchange}
        value="Weightclass"
        labelclasses={
          "select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
        }
        selectclasses={
          " bg-gray-50 border text-zinc-950 border-gray-300  text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-white/10 dark:placeholder-gray-400 dark:text-white "
        }
        selectid={"weightclasses"}
        options={{
          Men: ["59", "66", "74", "83", "93", "105", "120", "120+"],
          Women: ["47", "52", "57", "63", "69", "76", "84", "84+"],
        }}
      />
    </div>
  );
}

