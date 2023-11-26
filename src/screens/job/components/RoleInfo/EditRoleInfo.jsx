import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';

const employmentOptions = ['Full-time', 'Part-time', 'Temporary'];
const locationOptions = ['Hybrid', 'In Office', 'Remote'];

export const EditRoleInfo = ({ job, edit }) => {
  return (
    <form className="flow">
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Description"
        value={job.description}
        name="description"
      />
      <RadioGroup
        options={employmentOptions}
        label="Employment type"
        name="employment-type"
        className="cluster"
      />

      <RadioGroup
        options={locationOptions}
        label="Location"
        name="location"
        className="cluster"
      />
    </form>
  );
};
