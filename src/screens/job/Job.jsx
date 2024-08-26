import { useState } from 'react';
import { useLocation, useLoaderData, redirect, Outlet } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob, updateJob } from '@network/jobs';
import { validateErrors } from '@screens/addJob/helpers/validate-job';

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

export const action = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const formData = await request.formData();
  const { jobId } = params;

  const {
    tabName,
    description,
    employmentType,
    location,
    salary,
    status,
    companyId,
    companyName,
    companyDescription,
    benefits,
    size,
    time,
    date,
    probation,
  } = Object.fromEntries(formData.entries(formData));

  const jobToUpdate = { id: jobId, tabName };

  if (description) {
    jobToUpdate.description = description;
  }

  if (status) {
    jobToUpdate.status = status;
  }

  if (employmentType) {
    jobToUpdate.employmentType = employmentType;
  }

  if (location) {
    jobToUpdate.location = location;
  }

  if (salary) {
    jobToUpdate.salary = parseInt(salary);
  }

  if (tabName === 'company') {
    jobToUpdate.company = {
      id: companyId,
      name: companyName,
      description: companyDescription,

    };

    if (size) {
      jobToUpdate.company.size = parseInt(size);
    }
  }

  if (benefits) {
    jobToUpdate.benefits = benefits;
  }

  if (time && date) {
    jobToUpdate.startDate = new Date(`${date} ${time}`).toISOString();
  }

  if (probation) {
    jobToUpdate.probation = probation;
  }

  try {
    return await updateJob(jobId, jobToUpdate, token);//
  }
  catch (err) {
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }

    return validateErrors(err.errors);
  }
};

export const Job = () => {
  const [edit, setEdit] = useState(false);
  const job = useLoaderData();

  const location = useLocation();
  const from = location.state?.from || '/jobs';

  return (
    <Outlet context={{ job, edit, setEdit, from }} />
  );
};
