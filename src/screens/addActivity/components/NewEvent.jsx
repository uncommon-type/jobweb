import { EditableCheckbox } from '@screens/common/EditableCheckbox';
import { EditableDateTime } from '@screens/common/EditableDateTime';
import { EditableDescription } from '@screens/common/EditableDescription';
import { SaveButton } from '@screens/common/Buttons/SaveButton';
import { DeleteButton } from '@screens/common/Buttons/DeleteButton';

export const NewEvent = () => {
  return (
    <form className="flow">
      <EditableCheckbox
        edit={true}
        showLabel={true}
        label="Type (hiring call, interview, etc)"
        name="activity"
      />
      <EditableDateTime
        edit={true}
        showLabel={true}
        label="Start time"
        value=""
        name="date"
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
