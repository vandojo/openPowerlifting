export function Tbody({tdcls, data}) {
  const tableRow = [];

  Object.keys(data)
    .filter((key) => key !== "madePrediction" && key !== "Weightclass")
    .map((name) =>
      tableRow.push(
        <tr key={name}>
          <td className={tdcls}>{name}</td>

          {data[name].map((data) => (
            <td key={data.id} className={tdcls}>
              {data.val}
            </td>
          ))}
        </tr>
      )
    );
  return <tbody>{tableRow}</tbody>;
}

