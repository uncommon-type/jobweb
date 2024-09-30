import { useState } from 'react';
import { useFetcher } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const EditableActivity = ({ activity, edit, onCancel, errors, isEvent, jobId }) => {
  const [isChecked, setIsChecked] = useState(activity.done);
  const fetcher = useFetcher({ key: 'activity-fetcher' });
  const titleError = getErrorMessage(errors, 'title');
  const descriptionError = getErrorMessage(errors, 'description');

  const maxLength = 250;

  const editMarkup = (
    <fetcher.Form method='put' className='flow' action={`/jobs/${jobId}/activity/${activity.type}s/${activity.id}`}>
      <input type='hidden' name='type' value={activity.type} />
      <input type='hidden' name='id' value={activity.id} />
      <EditableCheckbox
        id={activity.id}
        name='activityStatus'
        label={activity.title}
        labelHidden={edit ? true : false}
        checked={isChecked}
        value={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
        className={edit ? 'align-self' : ''}
        edit={edit}
        error={titleError}
        data-type={activity.type}
        textFieldName='activityTitle'
        textFieldValue={activity.title}
      />
      {isEvent && (
        <EditableDateTime
          name='date'
          value={activity.startDate}
          edit={edit}
        />
      )}
      <EditableDescription
        name='description'
        label='Description'
        value={activity.description}
        edit={edit}
        error={descriptionError}
        maxLength={maxLength}
      />
      <div className='cluster gap-left'>
        <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
        <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={onCancel} type='button' />
      </div>
    </fetcher.Form>
  );

  const viewMarkup = (
    <>
      <EditableCheckbox
        id={activity.id}
        name='activityStatus'
        label={activity.title}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          fetcher.submit({ id: e.target.id, type: e.target.dataset.type, activityStatus: e.target.checked }, { method: 'PUT', action: `/jobs/${jobId}/activity/status` });
        }}
        data-type={activity.type}
      />
      {isEvent && (
        <EditableDateTime
          name='date'
          value={activity.startDate || new Date()}
          edit={edit}
        />
      )}
      <EditableDescription
        name='description'
        label='Description'
        value={activity.description}
        edit={edit}
      />
    </>
  );

  return (
    edit
      ? editMarkup
      : viewMarkup
  );
};
