export const Select = ({ id, label = '', name = '', showLabel = false, className = '', options, defaultValue, ...props }) => (
  <>
    <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
      {label}
    </label>
    <select id={id} name={name} {...props} className={className} defaultValue={defaultValue}>
      {options.map(({ label }) => (
        <option key={label} value={label}>
          {label}
        </option>
      ))}
    </select>
  </>
);
