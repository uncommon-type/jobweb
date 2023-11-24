import { EditableCheckbox } from '@screens/common/Inputs/EditableCheckbox';

export const Task = ({ activity, edit }) => {
  return (
    <>
      <EditableCheckbox
        edit={edit}
        label="Short title"
        value={activity.title}
        name="activity"
      />
    </>
  );
};
