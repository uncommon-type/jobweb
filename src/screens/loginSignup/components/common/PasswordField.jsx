export const PasswordField = ({ error, onChange, loading }) => {
  return (
    <div className="form-item">
      <label htmlFor="password" className="font-special">
        Password
      </label>
      {error && <p className="form-item-error">{error}</p>}
      <input
        id="password"
        name="password"
        type="password"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        readOnly={loading}
        onChange={onChange}
      />
    </div>
  );
};


