import { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';

export const TagInput = ({ name, disabled }) => {
  const { fetcher } = useOutletContext();
  const inputValue = useRef(null);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      inputValue.current.value = '';
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <div className='tag-form width-10'>
      <label htmlFor={name}>
        <span className='sr-only'>
          {`Enter a ${name}`}
        </span>
        <input
          type='text'
          id={name}
          name={name}
          ref={inputValue}
          disabled={disabled}
        />
      </label>
      <Button variant='naked' icon='plusIcon' aria-label={`Add a ${name}`} type='submit' name='intent' value='ADD' disabled={disabled} />
    </div>
  );
};
