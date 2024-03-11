import { Form } from 'react-router-dom';

import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';
import { DeleteButton } from '@screens/common/Buttons/DeleteButton';
import { SaveButton } from '@screens/common/Buttons/SaveButton';

export const Task = ({ activity, edit, onChange }) => {
  return (
    <Form method="put" className="flow">
      <EditableCheckbox
        edit={edit}
        label="Short title"
        value={activity.title}
        name="activity"
        checked={activity.done}
        onChange={onChange}
      />
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

