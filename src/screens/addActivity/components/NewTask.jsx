import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDescription } from '@screens/common/EditableDescription';
import { SaveButton } from '@screens/common/Buttons/SaveButton';
import { DeleteButton } from '@screens/common/Buttons/DeleteButton';

export const NewTask = ({ jobId }) => {
  return (
    <form className="flow">
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label="Short title"
        name="activity"
      />
      <EditableDescription
        edit={true}
        showLabel={true}
        label="Description"
        name="description"
        value=""
      />
      <div className="sidebar">
        <div />
        <div className="cluster gap-left">
          <SaveButton />
          <DeleteButton />
        </div>
      </div>
    </form>
  );
};
