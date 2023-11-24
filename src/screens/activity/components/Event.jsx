import { EditableCheckbox } from '@screens/common/Inputs/EditableCheckbox';

export const Event = ({ activity, edit }) => {
  return (
    <>
      <EditableCheckbox
        edit={edit}
        label="Type (hiring call, interview, etc)"
        value={activity.title}
        name="activity"
      />
    </>
  );
};
