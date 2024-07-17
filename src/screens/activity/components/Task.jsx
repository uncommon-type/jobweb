import { useState } from 'react';
import { Form, useFetcher, useSubmit } from 'react-router-dom';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const Task = ({ activity, edit, setEdit }) => {
  const [isChecked, setIsChecked] = useState(activity.done);
  const fetcher = useFetcher();
  const submit = useSubmit();

  const toggleEditMode = (val) => {
    setEdit(!val);
  };

  const handleCheckboxChange = (val) => {
    setIsChecked(val);
  };

  const handleCancel = () => {
    toggleEditMode(edit);
    handleCheckboxChange(activity.done);
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
              label='Type (hiring call, interview, etc)'
              value={activity.title}
              name='activity'
              checked={isChecked}
              onChange={(e) => {
                handleCheckboxChange(e.target.checked);
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
        <Form
          method='put'
          className='flow'
          onSubmit={(e) => {
            submit(e.target.form, { method: 'PUT' });
            toggleEditMode(edit);
          }}
        >
          <input type='hidden' name='type' value='task' />
          <input
            name='activityTitle'
            type='hidden'
            value={activity.title}
          />
          <input
            name='description'
            type='hidden'
            value={activity.description}
          />
          <EditableCheckbox
            edit={edit}
            label='Type (hiring call, interview, etc)'
            value={activity.title}
            name='activity'
            checked={isChecked}
            onChange={(e) => {
              handleCheckboxChange(e.target.checked);
            }}
          />
          <EditableDescription
            edit={edit}
            label='Description'
            value={activity.description}
            name='description'
          />
          <div className='cluster gap-left'>
            <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
            <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
          </div>
        </Form>
      )}
    </>
  );
};
