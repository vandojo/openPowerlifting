export function Thead({theadcls, colnames, colcls}) {
  const cols = [];

  colnames.map((colname) =>
    cols.push(
      <th key={colname} className={colcls}>
        {colname}
      </th>
    )
  );

  return (
    <thead className={theadcls}>
      <tr>{cols}</tr>
    </thead>
  );
}
//
