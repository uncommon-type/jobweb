import { useState } from 'react';
import { useLocation, useLoaderData, redirect, Outlet } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob, updateJob } from '@network/jobs';
import { validateErrors } from '@screens/addJob/helpers/validate-job';

export const jobLoader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const regex = new RegExp('[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}');

  if (!regex.test(params.jobId)) {
    throw new Response('', {
      status: 404,
      statusText: 'Not found',
    });
  }

  try {
    return await getJob(params.jobId, token);
  }
  catch (err) {
    console.error('Error caught while fetching a job', err);
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const updateJobAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;

  const formData = await request.formData();

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
  } = Object.fromEntries(formData);

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
    return await updateJob(jobId, jobToUpdate, token);
  }
  catch (err) {
    console.error('Error caught while attempting to update a job', err);
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
  const job = useLoaderData();
  const [edit, setEdit] = useState(false);
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <Outlet context={{ job, edit, setEdit, handleCancel, from }} />
  );
};
