import { useState, useEffect } from 'react';
import { useFetcher, useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const Task = ({ activity, maxLength }) => {
  const { edit, setEdit } = useOutletContext();
  const [isChecked, setIsChecked] = useState(activity.done);
  const fetcher = useFetcher();
  const errors = fetcher?.data?.length ? fetcher.data : null;
  const titleError = getErrorMessage(errors, 'title');
  const descriptionError = getErrorMessage(errors, 'description');

  useEffect(() => {
    if (fetcher.data && !errors) {
      setEdit(false);
    }
  }, [fetcher.data]);

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit
      && (
        <>
          <fetcher.Form method='put' className='flow'>
            <input type='hidden' name='type' value='task' />
            <EditableCheckbox
              edit={edit}
              label='Type (prep for hiring call, etc)'
              value={activity.title}
              name='activity'
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                fetcher.submit(e.target.form, { method: 'PUT' });
              }}
            />
          </fetcher.Form>
          <EditableDescription
            edit={edit}
            label='Description'
            value={activity.description}
            name='description'
          />
        </>
      )}
      {edit
      && (
        <fetcher.Form method='put' className='flow'>
          <input type='hidden' name='type' value='task' />
          <EditableCheckbox
            edit={edit}
            label='Short title'
            value={activity.title}
            name='activity'
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
            error={titleError}
            className='align-self'
          />
          <EditableDescription
            edit={edit}
            label='Description'
            value={activity.description}
            name='description'
            maxLength={maxLength}
            error={descriptionError}
          />
          <div className='cluster gap-left'>
            <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
            <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
          </div>
        </fetcher.Form>
      )}
    </>
  );
};
