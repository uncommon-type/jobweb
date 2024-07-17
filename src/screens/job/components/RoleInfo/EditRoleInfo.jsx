import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';
import { EditableSalaryInput } from '@screens/common/EditableSalaryInput';

const employmentOptions = ['Full-time', 'Part-time', 'Temporary'];
const locationOptions = ['Hybrid', 'In Office', 'Remote'];

export const EditRoleInfo = ({ job, edit }) => (
  <form className='flow'>
    <TextAreaInput
      edit={edit}
      showLabel={true}
      label='Description'
      value={job.description}
      name='description'
    />
    <RadioGroup
      options={employmentOptions}
      label='Employment type'
      name='employmentType'
      className='cluster'
    />
    <RadioGroup
      options={locationOptions}
      label='Location'
      name='location'
      className='cluster'
    />
    <EditableSalaryInput
      label='Salary per year, in pounds'
      name='salary'
      value={job.salary}
      className='input width-8'
    />
  </form>
);
