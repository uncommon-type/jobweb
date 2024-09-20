import { useState } from 'react';
import { useFetcher } from 'react-router-dom';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { Button } from '@screens/common/Buttons/Button';

export const Event = ({ activity, maxLength, edit, onCancel, titleError, descriptionError }) => {
  const [isChecked, setIsChecked] = useState(activity.done);
  const fetcher = useFetcher({ key: 'activity-fetcher' });

  return (
    edit
      ? (
          <fetcher.Form method='put' className='flow'>
            <input type='hidden' name='type' value='event' />
            <EditableCheckbox
              edit={edit}
              label='Type (hiring call, interview, etc)'
              value={activity.title}
              name='activity'
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
              error={titleError}
              className='align-self'
            />
            <EditableDateTime edit={edit} value={activity.startDate} name='date' />
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
              <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={onCancel} type='button' />
            </div>
          </fetcher.Form>
        )
      : (
          <>
            <fetcher.Form method='put' className='flow'>
              <input type='hidden' name='type' value='event' />
              <EditableCheckbox
                edit={edit}
                label='Type (hiring call, interview, etc)'
                value={activity.title}
                name='activity'
                checked={isChecked}
                onChange={
                  (e) => {
                    setIsChecked(e.target.checked);
                    fetcher.submit(e.target.form, { method: 'PUT' });
                  }
                }
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
        )
  );
};
