export const PasswordField = ({ error, onChange, loading }) => {
  return (
    <div className="form-item">
      <label htmlFor="current-password" className="font-special">
        Password
      </label>
      <div role="alert" className="form-item-error">
        {error}
      </div>
      <input
        id="current-password"
        name="current-password"
        type="password"
        onChange={() => onChange('password')}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        readOnly={loading}
      />
    </div>
  );
};

