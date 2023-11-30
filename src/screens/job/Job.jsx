import { redirect, useLoaderData, useNavigation, useLocation } from 'react-router-dom';

import { getJob } from '@network/jobs';
import { authenticate } from '@helpers/token';

import { JobContent } from './components/JobContent';


export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const job = await getJob(params.jobId, token);

  return { job };
}

export const Job = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  return (
    <div className={navigation.state === 'loading' ? 'loading' : ''}>
      <JobContent from={from} job={job} />
    </div>
  );
};
