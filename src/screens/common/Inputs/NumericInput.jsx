export const NumericInput = ({ label, name, className, value }) => {
  return (
    <div className="form-item">
      <label htmlFor={name}>
        <span className="font-special">{label}</span>
      </label>

      <input
        type="text"
        id={name}
        name={name}
        pattern="[0-9]*"
        minLength="1"
        maxLength="10"
        className={className}
        defaultValue={value}
      />
    </div>
  );
};
