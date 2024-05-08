import {TableRow} from "./tablerow";

// output is a table that shows the attempt selection if a prediction has been made
// otherwise return an empty <div>
export function Table({attempts, containspredictions, colnames}) {
  const tableHeader = colnames.map((colname) => (
    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
      {colname}
    </th>
  ));

  if (containspredictions) {
    return (
      <div className="basis-1/2 relative flex flex-col  h-full overflow-scroll text-gray-700 bg-gray-500 shadow-md bg-clip-border rounded-xl">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Lift
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                First
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Second
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                Third
              </th>
            </tr>
          </thead>
          <TableRow attempts={attempts} />
        </table>
      </div>
    );
  } else {
    return <></>;
  }
}
