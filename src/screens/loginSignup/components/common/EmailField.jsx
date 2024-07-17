export const EmailField = ({ from, error, onChange, loading }) => (
  <div className='form-item'>
    <label htmlFor='email' className='font-special'>
      Email
    </label>
    {error && <p className='form-item-error'>{error}</p>}
    <input type='hidden' name='redirectTo' value={from} />
    <input
      id='email'
      name='email'
      type='email'
      autoCapitalize='none'
      autoCorrect='off'
      spellCheck='false'
      autoComplete='off'
      readOnly={loading}
      onChange={onChange}
    />
  </div>
);
