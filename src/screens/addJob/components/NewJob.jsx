import { SaveButton } from '@screens/common/Buttons/SaveButton';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';

export const NewJob = () => {
  return (
    <form className="add-job-form flow flow-space-xl">
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
