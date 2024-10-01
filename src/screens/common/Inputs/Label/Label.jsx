export const Label = ({ children, id, hidden, helpText }) => {
  const labelClassName = hidden ? 'sr-only' : 'font-special';
  const helpTextClassName = 'help-text';

  const helpTextMarkup = helpText && (
    <span className={helpTextClassName}>{helpText}</span>
  );

  return (
    <label htmlFor={id} id={id} className={labelClassName}>
      <span>{children}</span>
      {helpText && helpTextMarkup}
    </label>
  );
};
