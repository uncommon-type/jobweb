import { useState } from 'react';
import { Form, useFetcher, useSubmit } from 'react-router-dom';

import { getTime, getDate } from '@helpers/datetime';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const Event = ({ activity, edit, setEdit, maxLength }) => {
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
      {!edit && (
        <>
          <fetcher.Form method='put' className='flow'>
            <input type='hidden' name='type' value='event' />
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
          <EditableDateTime edit={edit} value={activity.startDate} name='date' />
          <EditableDescription
            edit={edit}
            label='Description'
            value={activity.description}
            name='description'
          />
        </>
      )}
      {edit && (
        <Form
          method='put'
          className='flow'
          onSubmit={(e) => {
            submit(e.target.form, { method: 'PUT' });
            toggleEditMode(edit);
          }}
        >
          <input type='hidden' name='type' value='event' />
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
          <input
            name='time'
            type='hidden'
            value={getTime(activity.startDate)}
          />
          <input
            name='date'
            type='hidden'
            value={getDate(activity.startDate)}
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
          <EditableDateTime edit={edit} value={activity.startDate} name='date' />
          <EditableDescription
            edit={edit}
            label='Description'
            value={activity.description}
            name='description'
            maxLength={maxLength}
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
