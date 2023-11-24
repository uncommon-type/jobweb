import { TextAreaInput } from '@screens/common/Inputs/TextAreaInput';

export const EditRoleInfo = ({ job, edit }) => {
  return (
    <form className="flow">
      <TextAreaInput
        edit={edit}
        showLabel={true}
        label="Description"
        value={job.description}
        name="description"
      />
    </form>
  );
};
