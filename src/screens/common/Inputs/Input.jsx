import { useId } from 'react';

import { Alert } from '../Alert';

export const Input = ({ label, value, name, id, showLabel, error, className = '' }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className='form-item'>
      <label htmlFor={`${name}-${appliedId}`} className={`${className} font-special`}>
        {showLabel
          ? (
              <span className='font-special'>
                {label}
              </span>
            )
          : (
              <span className='sr-only'>{`Edit ${name} name`}</span>
            )}
      </label>
      <input
        type='text'
        id={`${name}-${appliedId}`}
        name={name}
        defaultValue={value}
        className='width-20'
      />
      {error && <Alert className='width-20'>{error}</Alert>}
    </div>
  );
};
