import { useState } from 'react';
import { useLocation, useLoaderData, redirect, Outlet } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    return await getJob(params.jobId, token);
  }
  catch (err) {
    console.error('Error fetching a job in job loader', err);
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const Job = () => {
  const [edit, setEdit] = useState(false);
  const job = useLoaderData();
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  return (
    <Outlet context={{ job, from, edit, setEdit }} />
  );
};
