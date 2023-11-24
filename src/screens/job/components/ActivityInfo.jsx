import { useOutletContext } from 'react-router-dom';

import { LinkToAddActivity } from './LinkToAddActivity';
import { CheckboxGroup } from '@screens/common/Inputs/CheckboxGroup';

export const ActivityInfo = () => {
  const { job } = useOutletContext();

  return (
    <>
      <LinkToAddActivity jobId={job.id}/>
      <form>
        <CheckboxGroup options={job.activities} jobId={job.id} />
      </form>
    </>
  );
};
