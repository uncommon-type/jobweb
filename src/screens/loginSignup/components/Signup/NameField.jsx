export const NameField = ({ error, onChange, loading }) => (
  <div className='form-item'>
    <label htmlFor='name' className='font-special'>
      Name
    </label>
    <div role='alert' className='form-item-error'>
      {error}
    </div>
    <input
      id='name'
      name='name'
      type='text'
      autoCapitalize='none'
      autoCorrect='off'
      spellCheck='false'
      autoComplete='off'
      readOnly={loading}
      onChange={onChange}
    />
  </div>
);
