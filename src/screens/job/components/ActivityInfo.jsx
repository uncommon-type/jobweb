import { LinkToAddActivity } from './LinkToAddActivity';
import { CheckboxGroup } from '@screens/common/Inputs/CheckboxGroup';

export const ActivityInfo = ({ job }) => {
  return (
    <>
      <LinkToAddActivity />
      <CheckboxGroup options={job.activities} />
    </>
  );
};
