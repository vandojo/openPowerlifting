export function TableRow({attempts}) {
  // filter keys and remove the bool "madePrediction"
  // then add a table row for each lift attempt
  const lifts = Object.keys(attempts).filter((key) => key !== "madePrediction");
  const tableRow = lifts.map((lift) => (
    <tr className="even:bg-blue-gray50/50" key={attempts[lift][3]}>
      <td className="p-4">{lift}</td>
      <td className="p-4">{attempts[lift][0]}</td>
      <td className="p-4">{attempts[lift][1]}</td>
      <td className="p-4">{attempts[lift][2]}</td>
    </tr>
  ));
  return <tbody>{tableRow}</tbody>;
}
