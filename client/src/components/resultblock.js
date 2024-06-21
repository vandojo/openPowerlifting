export function ResultBlock({data, plot, alttxt}) {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      {plot.exists ? (
        <img alt={alttxt} src={"data:image/png;base64," + plot.img} />
      ) : (
        <p>{alttxt}</p>
      )}
    </div>
  );
}

