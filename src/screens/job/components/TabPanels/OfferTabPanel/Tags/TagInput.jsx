import { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';
import { FieldError } from '@screens/common/Error/FieldError';

export const TagInput = ({ name, disabled, errorText }) => {
  const { fetcher } = useOutletContext();
  const inputNode = useRef(null);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      inputNode.current.value = '';
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <div className='tag-form width-10'>
      {errorText && <FieldError error={errorText} />}
      <label htmlFor={name}>
        <span className='sr-only'>
          {`Enter a ${name}`}
        </span>
        <input
          type='text'
          id={name}
          name={name}
          ref={inputNode}
          disabled={disabled}
        />
      </label>
      <Button variant='naked' icon='plusIcon' aria-label={`Add a ${name}`} type='submit' name='intent' value={`add-${name}`} disabled={disabled} />
    </div>
  );
};
