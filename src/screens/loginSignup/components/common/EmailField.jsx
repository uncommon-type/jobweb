export const EmailField = ({ error, onChange, loading }) => {
  return (
    <div className="form-item">
      <label htmlFor="email" className="font-special">
        Email
      </label>
      {error && (
        <div role="alert" className="form-item-error">
          {error}
        </div>
      )}
      <input
        id="email"
        name="email"
        type="email"
        onChange={() => onChange('email')}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        readOnly={loading}
      />
    </div>
  );
};
