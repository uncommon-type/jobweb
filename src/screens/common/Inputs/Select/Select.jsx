export const Select = ({ id, label = '', labelHidden = false, options, name = '', className = '', defaultValue, ...props }) => {
  const labelClassName = labelHidden ? 'sr-only' : 'font-special';

  const labelMarkup = (
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
  );

  const selectMarkup = (
    <select id={id} name={name} {...props} className={className} defaultValue={defaultValue}>
      {options.map(({ label }) => (
        <option key={label} value={label}>
          {label}
        </option>
      ))}
    </select>
  );

  return (
    <div className='form-item'>
      {labelMarkup}
      {selectMarkup}
    </div>
  );
};
