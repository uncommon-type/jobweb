import { useLoaderData, useLocation, redirect } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

import { JobContent } from './components/JobContent';
import { JobNotFound } from './components/JobNotFound';


export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    return await getJob(params.jobId, token);
  } catch (err) {
    console.error('Error fetching a job in job loader', err);
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong'
    })
  }
}

export const Job = () => {
  const job = useLoaderData();
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  if (!job) {
    return <JobNotFound from={from} />
  }

  return (
    <JobContent from={from} job={job} />
  );
};
