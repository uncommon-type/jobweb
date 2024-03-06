import { useLocation, redirect, useActionData } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { validateJob } from './helpers/validate-job';
import { filterOutEmptyOrNull } from '@helpers/form';
import { postJob } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewJob } from './components/NewJob';
import { Alert } from '@screens/common/Alert';

export const action = async ({ request }) => {
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
    jobTitle,
    company: {
      id: uuidv4(),
      name: companyName,
      size: parseInt(size)
    },
    status,
    employmentType,
    location,
    description,
    salary: parseInt(salary)
  }

  const errors = validateJob(jobToAdd);

  if (errors.length !== 0) {
    return errors;
  }

  const cleanJobToAdd = filterOutEmptyOrNull(jobToAdd);

  try {
    await postJob(cleanJobToAdd, token);
    return redirect(`/jobs`);
  } catch (err) {
    console.error('Error caught while attempting to post a job', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong'
      })
    }
    return err.errors;
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
        <NewJob />
        {actionData.length !== 0
          ? actionData.map((error) => <Alert key={error.message} message={error.message} />)
          : null}
      </main>
    </>
  );
};
