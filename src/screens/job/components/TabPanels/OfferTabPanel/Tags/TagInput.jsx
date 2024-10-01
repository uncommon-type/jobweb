import { useEffect, useRef } from 'react';
import { useOutletContext, useFetcher } from 'react-router-dom';

import { Input } from '@screens/common/Inputs/Input/Input';

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
    <Input
      ref={inputNode}
      id={name}
      name={name}
      label={name}
      labelHidden={true}
      disabled={disabled}
      className='tag-form width-10'
      error={errorText}
      action={{
        variant: 'naked',
        icon: 'plusIcon',
        ariaLabel: `Add a ${name}`,
        value: name,
        type: 'submit',
        disabled,
        handler: handleAdd,
      }}
    />
  );
};
