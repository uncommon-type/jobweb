import { useLocation, useParams, useNavigation } from 'react-router-dom';

import { getJob } from '@network/jobs';
import { JobContent } from './components/JobContent';

export const Job = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from || '/jobs';
  const { jobId } = useParams();

  const job = getJob(jobId);

  return (
    <div className={navigation.state === 'loading' ? 'loading' : ''}>
      <JobContent from={from} job={job} />
    </div>
  );
};
