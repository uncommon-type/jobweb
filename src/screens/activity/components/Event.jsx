import { Form } from 'react-router-dom';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { DeleteButton } from '@screens/common/Buttons/DeleteButton';
import { SaveButton } from '@screens/common/Buttons/SaveButton';

export const Event = ({ activity, edit, jobId }) => {
  return (
    <Form method="put" className="flow">
      <input type="hidden" name="jobId" value={jobId} />
      <input type="hidden" name="activityId" value={activity.id} />
      <EditableCheckbox
        edit={edit}
        label="Type (hiring call, interview, etc)"
        value={activity.title}
        name="activity"
      />
      <EditableDateTime edit={edit} value={activity.startDate} name="date" />
      <EditableDescription
        edit={edit}
        label="Description"
        value={activity.description}
        name="description"
      />
      {edit &&
        <div className="sidebar">
          <div />
          <div className="cluster gap-left">
            <SaveButton />
            <DeleteButton />
          </div>
        </div>
      }
    </Form>
  );
};
