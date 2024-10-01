export const Legend = ({ children, hidden }) => {
  const legendClassName = hidden ? 'sr-only' : 'font-special';

  return (
    <legend className={legendClassName}>
      <span>
        {children}
      </span>
    </legend>
  );
};
