import { useState } from 'react';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Alert } from '@screens/common/Alert';
import { Button } from '@screens/common/Buttons/Button';

const getErrorMessage = (erroredFields, field) => {
  const error = erroredFields.find(erroredField => erroredField.name === field);
  return error ? error.message : null;
};

export const NewEvent = ({ jobId, errors }) => {
  const [isChecked, setIsChecked] = useState(false);
  const descriptionError = getErrorMessage(errors, 'description');
  const activityTitleError = getErrorMessage(errors, 'activity');

  const handleCancel = () => {

  };

  return (
    <>
      <input type='hidden' name='jobId' value={jobId} />
      <input type='hidden' name='type' value='event' />
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label='Type (hiring call, interview, etc)'
        name='activity'
        className='items-end'
        error={activityTitleError}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <EditableDateTime
        edit={true}
        showLabel={true}
        label='Start time'
        value=''
        name='date'
      />
      <EditableDescription
        edit={true}
        showLabel={true}
        label='Description'
        value=''
        name='description'
      />
      {descriptionError && (
        <Alert>
          {descriptionError}
        </Alert>
      )}
      <div className='cluster gap-left'>
        <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
        <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
      </div>
    </>
  );
};
