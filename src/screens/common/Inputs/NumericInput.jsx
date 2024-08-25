import { FieldError } from '../Error/FieldError';

export const NumericInput = ({ label, name, className, value, error }) => (
  <div className='form-item'>
    <label htmlFor={name}>
      <span className='font-special'>{label}</span>
    </label>
    {error && <FieldError error={error} />}
    <input
      type='text'
      id={name}
      name={name}
      pattern='[0-9]*'
      minLength='1'
      maxLength='10'
      className={className}
      defaultValue={value}
    />
  </div>
);
