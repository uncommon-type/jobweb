import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';

export const Event = ({ activity, edit }) => {
  return (
    <>
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
    </>
  );
};
