import { Input } from '@screens/common/Inputs/Input';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { SaveButton } from '@screens/common/Buttons/SaveButton';

export const NewJob = () => {
  return (
    <form className="add-job-form flow flow-space-xl">
      <Input showLabel={true} label="Role" name="role" />
      <Input showLabel={true} label="Company" name="company" />
      <TextAreaInput
        edit={true}
        showLabel={true}
        label="Company description (optional)"
        value=""
        name="description"
        className="width-20"
      />
      <SaveButton />
    </form>
  );
};
