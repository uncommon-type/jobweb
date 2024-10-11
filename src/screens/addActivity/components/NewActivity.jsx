import { useState } from 'react';

import { getErrorMessage } from '@helpers/form';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const NewActivity = ({ jobId, type, onCancel, errors }) => {
  const [isChecked, setIsChecked] = useState(false);
  const activityTitleError = getErrorMessage(errors, 'title');
  const dateTimeError = getErrorMessage(errors, 'startDate');
  const descriptionError = getErrorMessage(errors, 'description');

  return (
    <>
      <input type='hidden' name='jobId' value={jobId} />
      <input type='hidden' name='type' value={type} />
      <EditableCheckbox
        name='activityStatus'
        label={type === 'event' ? 'Type (hiring call, interview, etc)' : 'Short title'}
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        className='align-self'
        error={activityTitleError}
        edit={true}
        textFieldName='activityTitle'
      />
      {type === 'event' && (
        <EditableDateTime
          name='date'
          label='Start time'
          error={dateTimeError}
          edit={true}
        />
      )}
      <EditableDescription
        name='description'
        label='Description'
        error={descriptionError}
        edit={true}
      />
      <div className='cluster gap-left'>
        <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
        <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={onCancel} type='button' />
      </div>
    </>
  );
};
