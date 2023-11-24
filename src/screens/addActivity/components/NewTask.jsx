import { EditableCheckbox } from '@screens/common/Inputs/EditableCheckbox';
import { SaveButton } from '@screens/common/Buttons/SaveButton';
import { DeleteButton } from '@screens/common/Buttons/DeleteButton';

export const NewTask = () => {
  return (
    <form className="flow">
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label="Short title"
        name="activity"
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
