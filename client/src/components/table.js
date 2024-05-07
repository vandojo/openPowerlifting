import {TableRow} from "./tablerow";

// output is a table that shows the attempts
export function Table({attempts}) {
  //const lifts = ["Squat", 175, 185, 195];

  return (
    <table>
      <thead>
        <tr>
          <th>Lift</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <TableRow attempts={attempts} />
    </table>
  );
}
