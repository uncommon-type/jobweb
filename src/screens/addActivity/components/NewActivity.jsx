import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Alert } from '@screens/common/Alert';
import { Button } from '@screens/common/Buttons/Button';

export const NewActivity = ({ jobId, errors, type }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const descriptionError = getErrorMessage(errors, 'description');
  const activityTitleError = getErrorMessage(errors, 'activity');

  const handleCancel = () => {
    navigate(`/jobs/${jobId}/activity`);
  };

  return (
    <>
      <input type='hidden' name='jobId' value={jobId} />
      <input type='hidden' name='type' value={type} />
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label={type === 'event' ? 'Type (hiring call, interview, etc)' : 'Short title'}
        name='activity'
        className='align-self'
        error={activityTitleError}
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
      {type === 'event' && (
        <EditableDateTime
          edit={true}
          showLabel={true}
          label='Start time'
          value=''
          name='date'
        />
      )}
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
