export function TableRow({attempts}) {
  //const attempts = ["Squat", 175, 185, 195];
  //const attempts = {{lift.attempts}.map(attempt => <td>{attempt}</td>)}
  const tableRow = attempts.map((lift) => (
    <tr>
      <td>{lift.liftName}</td>
      <td>{lift.firstAttempt}</td>
      <td>{lift.secondAttempt}</td>
      <td>{lift.thirdAttempt}</td>
    </tr>
  ));
  return <tbody>{tableRow}</tbody>;
}
