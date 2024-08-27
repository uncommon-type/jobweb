import { getErrorMessage } from '@helpers/form';

import { Select } from '@screens/common/Inputs/Select/Select';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';
import { EditableSalary } from '@screens/common/EditableSalary';
import { Button } from '@screens/common/Buttons/Button';

const EMPLOYMENT_OPTIONS = ['Full-time', 'Part-time', 'Temporary'];
const LOCATION_OPTIONS = ['Hybrid', 'In office', 'Remote'];
const STATUS_OPTIONS = [
  { value: 'Interested', label: 'Interested' },
  { value: 'Applied', label: 'Applied' },
  { value: 'Interviewing', label: 'Interviewing' },
  { value: 'Offer received', label: 'Offer received' },
];

export const EditRoleInfo = ({ job, edit, onEdit, errors }) => {
  const roleDescriptionError = getErrorMessage(errors, 'description');
  const employmentTypeError = getErrorMessage(errors, 'employmentType');
  const locationError = getErrorMessage(errors, 'location');
  const salaryError = getErrorMessage(errors, 'salary');

  const handleCancel = () => {
    onEdit(!edit);
  };

  return (
    <>
      <input
        name='tabName'
        type='hidden'
        value='role'
      />
      <Select
        id={job.id}
        name='status'
        className='width-9'
        options={STATUS_OPTIONS}
        defaultValue={job.status}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Description'
        value={job.description}
        name='description'
        error={roleDescriptionError}
      />
      <RadioGroup
        options={EMPLOYMENT_OPTIONS}
        label='Employment type'
        name='employmentType'
        error={employmentTypeError}
        defaultValue={job.employmentType}
      />
      <RadioGroup
        options={LOCATION_OPTIONS}
        label='Location'
        name='location'
        error={locationError}
        defaultValue={job.location}
      />
      <EditableSalary
        label='Salary per year, in pounds'
        name='salary'
        value={job.salary}
        className='input width-8'
        error={salaryError}
      />
      <div className='cluster'>
        <Button label='Save' aria-label='Save job' variant='primary' />
        <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
      </div>
    </>
  );
};
