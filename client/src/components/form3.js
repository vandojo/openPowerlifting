import {Header3} from "./h3";
import {Liftcard} from "./liftcard2";
import {Weightblock} from "./weightblock";
import {SubmitButton} from "./submitbutton";

import FlaskAPI from "./flaskAPI";
//

export function Form3({formdata, setformdata, setpredictions, setplot}) {
  // Method to update the table with predictions on the front end
  const handlePredictions = (prediction) => {
    setpredictions(prediction);
  };

  // this method passes the plot with the distribution of totals and the expected total to the frontend
  const handlePlot = (img) => {
    setplot({img: img, exists: true});
  };

  // send form data to the server
  // needs renaming to generic function name
  const getPredictions = () => {
    FlaskAPI.predict(formdata).then((response) => {
      handlePredictions(response.prediction);

      handlePlot(response.img);
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = "";
    name === "Weightmetric"
      ? (value = e.target.checked)
      : (value = e.target.value);

    let inputData = {...formdata};

    inputData[name] = value;

    setformdata(inputData);
  };

  // form submit method
  const handleSubmit = (e) => {
    e.preventDefault();

    getPredictions();
  };

  return (
    <form
      className="w-full max-w-sm space-y-8"
      method="post"
      action="/predict"
      onSubmit={handleSubmit}
    >
      <Header3
        classes={
          "text-lg/7 font-semibold text-zinc-950 sm:text-base/7 dark:text-white"
        }
        txt={"Enter your attempts:"}
      />

      <Liftcard
        lifts={["Squat", "Bench press", "Deadlift"]}
        onchange={handleChange}
      />

      <Weightblock onchange={handleChange} />

      <SubmitButton
        buttonclasses={
          "border-none relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold shadow bg-purple-800 hover:bg-purple-600 focus:shadow-outline focus:outline-none  text-white  py-2 px-4 "
        }
        buttontype={"submit"}
        buttontxt={"Get attempts"}
        spanclasses={
          "absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        }
      />
    </form>
  );
}
