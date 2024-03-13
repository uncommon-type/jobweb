import { useState } from 'react';
import { redirect, useLoaderData, useActionData, useNavigate } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';
import { updateJobActivity } from '@network/jobs';
import { validateActivity } from '@screens/addActivity/components/helpers/validate-activity';

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

  const {
    activityInput: activityTitle,
    activity: activityCheckbox,
    time,
    date,
    description,
  } = Object.fromEntries(formData);

  const activityToUpdate = {
    id: activityId,
    done: activityCheckbox === "on" ? true : false
  }

  if (activityTitle) {
    activityToUpdate.title = activityTitle
  }

  if (time && date) {
    activityToUpdate.startDate = new Date(`${date} ${time}`).toISOString()
  }

  if (description) {
    activityToUpdate.description = description
  }

  const errors = validateActivity(activityToUpdate);

  if (errors.length !== 0) {
    return errors;
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
  const navigate = useNavigate();
  const isEvent = activity.type === 'event';

  const handleChange = async (e) => {
    const activityToUpdate = {
      id: activity.id,
      done: e.target.checked
    }
    const token = authenticate();

    if (!token) {
      navigate('/')
    }

    await updateJobActivity(activityToUpdate, token, job.id);
    navigate(`/jobs/${job.id}/activity/${activity.type}s/${activity.id}`)
  }

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={`/jobs/${job.id}/activity`}
          title={isEvent ? 'Event details' : 'Task details'}
          onEdit={() => setEdit(!edit)}
          showEdit={true}
        />
      </Header>
      <main>
        <section className="activity-details-group flow">
          {isEvent ? (
            <Event activity={activity} edit={edit} onChange={handleChange} />
          ) : (
            <Task activity={activity} edit={edit} onChange={handleChange} />
          )}
          {edit && actionData.length !== 0
            ? actionData.map((error) => <Alert key={error.message} message={error.message} />)
            : null}
        </section>
      </main>
    </>
  );
};
