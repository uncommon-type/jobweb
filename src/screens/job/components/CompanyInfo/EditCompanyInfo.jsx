import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';
import { NumericInput } from '@screens/common/Inputs/NumericInput';

export const EditCompanyInfo = ({ job, edit }) => {
  return (
    <form className="flow">
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Description"
        value={job.company.description}
        name="description"
      />
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Benefits"
        value={job.benefits}
        name="benefits"

      />
      <NumericInput
        label="Size"
        value={job.company?.size}
        className="width-5"
        name="size"
      />
    </form>
  );
};

