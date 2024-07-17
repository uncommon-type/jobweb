import { useId } from 'react';

import { Alert } from '../Alert';

export const Input = ({ label, value, name, id, showLabel, error }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className='form-item'>
      <label htmlFor={`${name}-${appliedId}`} className='font-special'>
        {showLabel
          ? (
              label
            )
          : (
              <span className='sr-only'>{`Edit ${name} name`}</span>
            )}

        <div>
          <input
            type='text'
            id={`${name}-${appliedId}`}
            name={name}
            defaultValue={value}
            className='width-20'
          />
          {error && <Alert>{error}</Alert>}
        </div>
      </label>
    </div>
  );
};
