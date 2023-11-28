import { EditableSalaryInput } from '@screens/common/EditableSalaryInput';
import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { DateTimeInput } from '@screens/common/Inputs/DateTimeInput';
import { ProsAndConsContainer } from './ProsAndCons/ProsAndConsContainer';

export const EditOfferInfo = ({ job, edit }) => {
  return (
    <form className="flow">
      <EditableSalaryInput
        label="Salary per year, in pounds"
        name="salary-per-year"
        value={job.salary}
        className="input width-8"
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Benefits"
        value={job.benefits}
        name="benefits"
      />
      <DateTimeInput date={job.startDate} />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Probation"
        value={job.probation || 'n/a'}
        name="probation"
      />
      <ProsAndConsContainer job={job} />
    </form>
  );
};
