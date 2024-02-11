import {
  useLocation, redirect,
  json,
  useActionData,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { validateJob } from './helpers/validate-job';
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
    company: { id: uuidv4(), name: companyName, size: size ? parseInt(size) : null },
    status,
    employmentType,
    location,
  };

  if (description) {
    jobToAdd.description = description
  }

  if (salary) {
    jobToAdd.salary = salary
  }

  const errors = validateJob(jobToAdd);

  if (errors.length !== 0) {
    return json(errors);
  }

  try {
    await postJob(jobToAdd, token);
    return redirect(`/jobs`);
  } catch (err) {
    console.error('Error caught while attempting to post a job', err);
    return json(err);
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
