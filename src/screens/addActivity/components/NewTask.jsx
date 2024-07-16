import { useState } from 'react';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Alert } from '@screens/common/Alert';

const getErrorMessage = (erroredFields, field) => {
  const error = erroredFields.find(erroredField => erroredField.name === field);
  return error ? error.message : null;
};

export const NewTask = ({ jobId, errors }) => {
  const [isChecked, setIsChecked] = useState(false); /// / new
  const descriptionError = getErrorMessage(errors, 'description');
  const activityTitleError = getErrorMessage(errors, 'activity');

  return (
    <>
      <input type='hidden' name='jobId' value={jobId} />
      <input type='hidden' name='type' value='task' />
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label='Short title'
        name='activity'
        className='items-end'
        error={activityTitleError}
        checked={isChecked} // new
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}

      />
      <EditableDescription
        edit={true}
        showLabel={true}
        label='Description'
        name='description'
        value='' //  "NaN characters left"
      />
      {descriptionError && (
        <Alert>
          {' '}
          {descriptionError}
        </Alert>
      )}
      <div className='sidebar'>
        <div />
        <div className='cluster gap-left'>
          <button type='submit' className='button' data-type='primary'>
            Save
          </button>
          <button className='button' data-type='primary'>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
