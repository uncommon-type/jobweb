import { useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { EditableSalary } from '@screens/common/EditableSalary';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { DateTimeInput } from '@screens/common/Inputs/DateTimeInput';

export const EditOfferInfo = () => {
  const { job, edit, errors } = useOutletContext();
  const { salary, benefits, startDate, probation } = job;
  const salaryError = getErrorMessage(errors, 'salary');
  const benefitsError = getErrorMessage(errors, 'benefits');
  const probationError = getErrorMessage(errors, 'probation');
  const dateTimeInputError = getErrorMessage(errors, 'startDate');

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
        value={salary}
        className='input width-8'
        error={salaryError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Benefits'
        value={benefits}
        name='benefits'
        error={benefitsError}
      />
      <DateTimeInput
        date={startDate}
        error={dateTimeInputError}
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label='Probation'
        value={probation}
        name='probation'
        error={probationError}
      />
    </>
  );
};
