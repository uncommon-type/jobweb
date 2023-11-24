import { EditableCheckbox } from '@screens/common/Inputs/EditableCheckbox';
import { EditableDescription } from '@screens/common/Inputs/EditableDescription';

export const Event = ({ activity, edit }) => {
  return (
    <>
      <EditableCheckbox
        edit={edit}
        label="Type (hiring call, interview, etc)"
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

