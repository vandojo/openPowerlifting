export function SubmitButton({
  buttonclasses,
  spanclasses,
  buttontxt,
  buttontype,
}) {
  return (
    <button className={buttonclasses} type={buttontype}>
      {buttontxt}
      <span className={spanclasses} aria-hidden="true"></span>
    </button>
  );
}

