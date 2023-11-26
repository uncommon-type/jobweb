import { Input } from '@screens/common/Inputs/Input';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { SaveButton } from '@screens/common/Buttons/SaveButton';

const stages = ['Interested', 'Applied', 'Interviewing', 'Offer received'];
const employmentOptions = ['Full-time', 'Part-time', 'Temporary'];
const locationOptions = ['Hybrid', 'In Office', 'Remote'];


export const NewJob = () => {
  return (
    <form className="add-job-form flow flow-space-xl">
      <Input showLabel={true} label="Role" name="role" />
      <Input showLabel={true} label="Company" name="company" />
      <RadioGroup options={stages} label="Stage you're at" name="stage" />
      <RadioGroup
        options={employmentOptions}
        label="Type (optional)"
        name="employment"
      />
      <RadioGroup
        options={locationOptions}
        label="Location (optional)"
        name="location"
      />
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
