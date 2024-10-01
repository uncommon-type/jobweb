import { Form } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { Input } from '@screens/common/Inputs/Input/Input';
import { RadioGroup } from '@screens/common/Inputs/RadioGroup';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { Button } from '@screens/common/Buttons/Button';

const STAGES = ['Interested', 'Applied', 'Interviewing', 'Offer received'];
const EMPLOYMENT_OPTIONS = ['Full-time', 'Part-time', 'Temporary'];
const LOCATION_OPTIONS = ['Hybrid', 'In office', 'Remote'];

export const NewJob = ({ errors }) => {
  const jobTitleError = getErrorMessage(errors, 'jobTitle');
  const companyNameError = getErrorMessage(errors, 'company');
  const statusError = getErrorMessage(errors, 'status');
  const sizeError = getErrorMessage(errors, 'company/size');
  const employmentTypeError = getErrorMessage(errors, 'employmentType');
  const locationError = getErrorMessage(errors, 'location');
  const salaryError = getErrorMessage(errors, 'salary');
  const companyDescriptionError = getErrorMessage(errors, 'company/description');

  return (
    <Form method='post' className='add-job-form flow flow-space-xl' noValidate>
      <Input
        name='jobTitle'
        label='Role'
        className='width-20'
        error={jobTitleError}
      />
      <Input
        name='companyName'
        label='Company'
        className='width-20'
        error={companyNameError}
      />
      <RadioGroup options={STAGES} label="Stage you're at" name='status' error={statusError} />
      <RadioGroup
        options={EMPLOYMENT_OPTIONS}
        label='Type (optional)'
        name='employmentType'
        error={employmentTypeError}
      />
      <RadioGroup
        options={LOCATION_OPTIONS}
        label='Location (optional)'
        name='location'
        error={locationError}
      />
      <Input
        name='salary'
        label='salary'
        className='width-10'
        error={salaryError}
        pattern='[0-9]*'
        minLength='1'
        maxLength='10'
      />
      <Input
        name='size'
        label='Company size (optional)'
        className='width-10'
        pattern='[0-9]*'
        minLength='1'
        maxLength='10'
        error={sizeError}
      />
      <TextAreaInput
        edit={true}
        showLabel={true}
        label='Company description (optional)'
        value=''
        name='description'
        className='width-20'
        error={companyDescriptionError}
      />
      <Button label='Save' aria-label='Save job' variant='primary' type='submit' />
    </Form>
  );
};
