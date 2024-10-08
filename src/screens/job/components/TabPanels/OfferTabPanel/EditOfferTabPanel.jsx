import { useOutletContext } from 'react-router-dom';

import { getErrorMessage } from '@helpers/form';

import { EditableSalary } from '@screens/common/EditableSalary';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { DateTimeInput } from '@screens/common/Inputs/DateTimeInput/DateTimeInput';

export const EditOfferTabPanel = () => {
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
        name='salary'
        label='Salary per year, in pounds'
        value={salary}
        error={salaryError}
      />
      <TextAreaInput
        name='benefits'
        label='Benefits'
        value={benefits}
        error={benefitsError}
        edit={edit}
      />
      <DateTimeInput
        name='date'
        legend='Start date'
        value={startDate}
        error={dateTimeInputError}
      />
      <TextAreaInput
        name='probation'
        label='Probation'
        value={probation}
        error={probationError}
        edit={edit}
      />
    </>
  );
};
