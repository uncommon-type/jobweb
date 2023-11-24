import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';

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
    </form>
  );
};

