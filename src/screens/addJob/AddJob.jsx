import { useLocation, redirect, useActionData } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { validateJob } from './helpers/validate-job';
import { postJob } from '@network/jobs';
import { validateErrors } from './helpers/validate-job';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewJob } from './components/NewJob';

export const addJobAction = async ({ request }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const formData = await request.formData();

  const {
    jobTitle,
    companyName,
    status,
    employmentType,
    location,
    salary,
    description,
    size,
  } = Object.fromEntries(formData);

  const jobToAdd = {
    company: {
      id: uuidv4(),
    },
  };

  if (jobTitle) {
    jobToAdd.jobTitle = jobTitle;
  }

  if (status) {
    jobToAdd.status = status;
  }

  if (companyName) {
    jobToAdd.company.name = companyName;
  }

  if (employmentType) {
    jobToAdd.employmentType = employmentType;
  }

  if (location) {
    jobToAdd.location = location;
  }

  if (size) {
    jobToAdd.company.size = parseInt(size);
  }

  if (salary) {
    jobToAdd.salary = parseInt(salary);
  }

  if (description) {
    jobToAdd.description = description;
  }

  const errors = validateJob(jobToAdd);

  if (errors.length !== 0) {
    return errors;
  }

  try {
    await postJob(jobToAdd, token);
    return redirect(`/jobs`);
  }
  catch (err) {
    console.error('Error caught while attempting to post a job', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
    return validateErrors(err.errors);
  }
};

export const AddJob = () => {
  const location = useLocation();
  const from = location.state?.from || '/jobs';
  const actionData = useActionData() || [];

  return (
    <>
      <Header>
        <SecondaryNav fromLink={from} />
      </Header>
      <main>
        <NewJob errors={actionData.length !== 0 ? actionData : []} />
      </main>
    </>
  );
};
