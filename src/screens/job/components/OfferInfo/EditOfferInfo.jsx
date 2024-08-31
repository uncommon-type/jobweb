import { getErrorMessage } from '@helpers/form';

import { EditableSalary } from '@screens/common/EditableSalary';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { DateTimeInput } from '@screens/common/Inputs/DateTimeInput';
import { ProsAndConsContainer } from './ProsAndCons/ProsAndConsContainer';
import { Button } from '@screens/common/Buttons/Button';

export const EditOfferInfo = ({ job, edit, onEdit, errors }) => {
  const salaryError = getErrorMessage(errors, 'salary');
  const benefitsError = getErrorMessage(errors, 'benefits');
  const probationError = getErrorMessage(errors, 'probation');
  const dateTimeInputError = getErrorMessage(errors, 'startDate');

  const handleCancel = () => {
    onEdit(!edit);
  };

  return (
    <>
      <input
        name='tabName'
        type='hidden'
        value='offer'
      />
      <EditableSalary
        label='Salary per year, in pounds'
        name='salary'
        value={job.salary}
        className='input width-8'
        error={salaryError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Benefits'
        value={job.benefits}
        name='benefits'
        error={benefitsError}
      />
      <DateTimeInput
        date={job.startDate}
        error={dateTimeInputError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Probation'
        value={job.probation}
        name='probation'
        error={probationError}
      />
      <ProsAndConsContainer
        job={job}
      />
      <div className='cluster'>
        <Button label='Save' aria-label='Save job' variant='primary' />
        <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
      </div>
    </>
  );
};
