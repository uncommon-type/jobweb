import { useLoaderData, redirect, useActionData, json } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { getJob, postJobActivity } from '@network/jobs';
import { validateActivity } from './components/helpers/validate-activity';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewEvent } from './components/NewEvent';
import { NewTask } from './components/NewTask';
import { Alert } from '@screens/common/Alert';

export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    return await getJob(params.jobId, token);
  } catch (err) {
    console.error('Error caught while attempting to fetch a job in activity loader', err);
    if (err.status !== 404) {
      throw new Response('', { status: err.status || 500, statusText: 'Something went wrong' })
    }

    throw new Response('', { status: err.status, statusText: 'Job not found' });
  }
};

export const action = async ({ request }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const formData = await request.formData();

  const {
    jobId, type, activityInput: activityTitle, time, date, description, activityCheckbox: done,
  } = Object.fromEntries(formData);

  const errors = validateActivity({
    activityTitle, time, date, description,
  });

  if (errors.length !== 0) {
    return errors;
  }

  const activityToAdd = {
    id: uuidv4(),
    title: activityTitle,
    startDate: new Date(`${date} ${time}`).toISOString(),
    type,
    description,
    done: done === "on" ? true : false
  };

  if (description) {
    activityToAdd.description = description
  }

  try {
    await postJobActivity(activityToAdd, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  } catch (err) {
    console.error('Error caught while attempting to post an activity in activity action)', err);
    throw new Response('', { status: err.status || 500, statusText: 'Something went wrong' });
  }
};

export const AddActivity = ({ isEvent = false }) => {
  const job = useLoaderData();
  const actionData = useActionData() || [];

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${job.id}/activity`} />
      </Header>
      <main>
        <section className="add-activity-group flow">
          <NewActivityTabs jobId={job.id} />
          {isEvent ? <NewEvent jobId={job.id} /> : <NewTask jobId={job.id} />}
          {actionData.length !== 0
            ? actionData.map((error) => <Alert key={error.message} message={error.message} />)
            : null}
        </section>
      </main>
    </>
  );
};

