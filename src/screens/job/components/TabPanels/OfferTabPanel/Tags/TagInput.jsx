import { useEffect, useRef } from 'react';
import { useOutletContext, useFetcher } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';
import { InlineError } from '@screens/common/Error/InlineError';

export const TagInput = ({ name, disabled, errorText }) => {
  const { job } = useOutletContext();
  const fetcher = useFetcher({ key: 'add-tag-fetcher' });
  const inputNode = useRef(null);

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      inputNode.current.value = '';
    }
  }, [fetcher.state, fetcher.data]);

  const handleAdd = (e) => {
    e.preventDefault();
    const { pro, con } = e.currentTarget.form;
    const tagValue = pro.value ? pro.value : con.value;
    const tagType = e.currentTarget.value;
    fetcher.submit({ title: tagValue, tabName: tagType }, { method: 'POST', action: `/jobs/${job.id}/offer/tags/${tagType}` });
  };

  return (
    <div className='tag-form width-10'>
      {errorText && <InlineError error={errorText} />}
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
      <Button variant='naked' icon='plusIcon' aria-label={`Add a ${name}`} value={name} disabled={disabled} onClick={handleAdd} />
    </div>
  );
};
