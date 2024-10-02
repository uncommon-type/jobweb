import { useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { Select } from '@screens/common/Inputs/Select/Select';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';
import { EditableSalary } from '@screens/common/EditableSalary';

const EMPLOYMENT_OPTIONS = ['Full-time', 'Part-time', 'Temporary'];
const LOCATION_OPTIONS = ['Hybrid', 'In office', 'Remote'];
const STATUS_OPTIONS = [
  { value: 'Interested', label: 'Interested' },
  { value: 'Applied', label: 'Applied' },
  { value: 'Interviewing', label: 'Interviewing' },
  { value: 'Offer received', label: 'Offer received' },
];

export const EditRoleTabPanel = () => {
  const { job, edit, errors } = useOutletContext();
  const { id, status, description, employmentType, location, salary } = job;
  const roleDescriptionError = getErrorMessage(errors, 'description');
  const employmentTypeError = getErrorMessage(errors, 'employmentType');
  const locationError = getErrorMessage(errors, 'location');
  const salaryError = getErrorMessage(errors, 'salary');

  return (
    <>
      <input
        name='tabName'
        type='hidden'
        value='role'
      />
      <Select
        id={id}
        name='status'
        label='Stage'
        className='width-9'
        options={STATUS_OPTIONS}
        defaultValue={status}
      />
      <TextAreaInput
        name='description'
        label='Description'
        value={description}
        error={roleDescriptionError}
        edit={edit}
      />
      <RadioGroup
        options={EMPLOYMENT_OPTIONS}
        label='Employment type'
        name='employmentType'
        error={employmentTypeError}
        defaultValue={employmentType}
      />
      <RadioGroup
        options={LOCATION_OPTIONS}
        label='Location'
        name='location'
        error={locationError}
        defaultValue={location}
      />
      <EditableSalary
        name='salary'
        label='Salary per year, in pounds'
        value={salary}
        className='input width-8'
        error={salaryError}
      />
    </>
  );
};
