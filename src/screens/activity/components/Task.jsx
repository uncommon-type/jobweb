import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';

export const Task = ({ activity, edit }) => {
  return (
    <>
      <EditableCheckbox
        edit={edit}
        label="Short title"
        value={activity.title}
        name="activity"
      />
      <EditableDescription
        edit={edit}
        label="Description"
        value={activity.description}
        name="description"
      />
    </>
  );
};
