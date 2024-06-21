import {useState} from "react";
import {Form3} from "./components/form3";
import {Table} from "./components/table3";
import {ResultBlock} from "./components/resultblock";

export function Layout({formdata, setformdata, setpredictions, data}) {
  const [plot, setPlot] = useState({
    img: "",

    exists: false,
  });
  return (
    <div className="relative rounded-xl grid gap-4 sm:grid-cols-2 xl:grid-cols-12 bg-zinc-50 font-sans dark:bg-zinc-950">
      <div className="relative rounded-xl sm:col-span-2 md:col-span-1 xl:col-span-6">
        <div className="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
          <div className="grid h-full w-full justify-items-center overflow-hidden place-items-start p-6 py-8 sm:p-8 lg:p-12">
            <p className="text-sm/4 text-left mb-4">
              Only know one attempt instead of two? Just leave one column empty!
            </p>
            <Form3
              formdata={formdata}
              setformdata={setformdata}
              setpredictions={setpredictions}
              setplot={setPlot}
            />
          </div>
        </div>
      </div>

      <div className="relative rounded-xl sm:col-span-2 xl:col-span-6 ">
        <Table
          headertxt={"Suggested attempts:"}
          colnames={[
            "Lift",
            "First Attempt",
            "Second Attempt",
            "Third Attempt",
          ]}
          data={data}
        />

        <ResultBlock
          plot={plot}
          data={`A total of  would place you in the percentile of your weight class`}
          alttxt="When you enter your attempts this field will show your standing"
        />
      </div>
    </div>
  );
}
//
