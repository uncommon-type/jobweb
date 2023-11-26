export const EditableSalaryInput = ({ label, name, value }) => {
  return (
    <div className="form-item">
      <label htmlFor={name}>
        <span className="font-special">{label}</span>
        <span className="salary-legend-hint">For example, 50000</span>
      </label>

      <div className="salary cluster">
        <div className="input-prefix" aria-hidden="true">
          £
        </div>
        <input
          className="input  width-8"
          id={name}
          name={name}
          type="text"
          spellCheck="false"
          defaultValue={value}
          pattern="[0-9]+"
          minLength="1"
          maxLength="10"
        />
        <div className="input-suffix" aria-hidden="true">
          per year
        </div>
      </div>
    </div>
  );
};
