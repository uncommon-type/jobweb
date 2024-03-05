import { useState } from 'react';
import { redirect, useLoaderData, useActionData } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Event } from './components/Event';
import { Task } from './components/Task';

export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    const job = await getJob(params.jobId, token);

    const activity = job.activities.find(
      (activity) => activity.id === params.activityId,
    );

    if (!activity) {
      throw new Response('', {
        status: 404,
        statusText: 'Activity not found',
      });
    }

    return { job, activity };
  } catch (err) {
    console.error('Error caught while attempting to fetch job', err);
    throw new Response('', {
      status: err.status,
      statusText: err.statusText || 'Something went wrong'
    })
  }
};

export const action = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { activityId, jobId } = params;

  const formData = await request.formData();
  const { activityInput: activityTitle, date, time, description, activity: activityCheckbox } = Object.fromEntries(formData);

  const errors = validateActivity({
    activityTitle, date, time, description,
  });

  if (errors.length !== 0) {
    return errors;
  }

  const activityToUpdate = {
    id: activityId,
    title: activityTitle,
    startDate: new Date(`${date} ${time}`).toISOString(),
    description,
    done: activityCheckbox === "on" ? true : false
  }

  try {
    await updateJobActivity(activityToUpdate, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  } catch (err) {
    console.error('Error caught while attempting to update an activity in activity action)', err);
    throw new Response('', {
      status: err.status,
      statusText: err.statusText || 'Something went wrong'
    })
  }
}


export const Activity = () => {
  const [edit, setEdit] = useState(false);
  const { job, activity } = useLoaderData();
  const actionData = useActionData() || [];
  const isEvent = activity.type === 'event';

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={`/jobs/${job.id}/activity`}
          title={isEvent ? 'Event details' : 'Task details'}
          showEdit={true}
          onEdit={() => setEdit(!edit)}
        />
      </Header>
      <main>
        <section className="activity-details-group flow">
          {isEvent ? (
            <Event activity={activity} edit={edit} jobId={job.id} />
          ) : (
            <Task activity={activity} edit={edit} jobId={job.id} />
          )}
          {actionData.length !== 0
            ? actionData.map((error) => <Alert key={error.message} message={error.message} />)
            : null}
        </section>
      </main>
    </>
  );
};
