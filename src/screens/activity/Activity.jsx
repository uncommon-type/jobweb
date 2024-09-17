import { redirect, useOutletContext, useParams } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { validateActivity } from './helpers/validate-act';
import { validateErrors } from '@screens/addJob/helpers/validate-job';
import { updateJobActivity } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Event } from './components/Event';
import { Task } from './components/Task';

export const action = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { activityId, jobId } = params;
  const formData = await request.formData();

  const { activityStatus, type, activityTitle, time, date, description } = Object.fromEntries(formData);

  const activityToUpdate = {
    id: activityId,
    type,
    done: activityStatus && activityStatus === 'on' ? true : false,
  };

  if (activityTitle) {
    activityToUpdate.title = activityTitle;
  }

  if (time && date) {
    activityToUpdate.startDate = new Date(`${date} ${time}`).toISOString();
  }

  if (description) {
    activityToUpdate.description = description;
  }

  const errors = validateActivity(activityToUpdate);

  if (errors.length !== 0) {
    return errors;
  }

  try {
    return await updateJobActivity(activityToUpdate, token, jobId);
  }
  catch (err) {
    console.error(
      'Error caught while attempting to update an activity in activity action)',
      err,
    );
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
    return validateErrors(err.errors);
  }
};

export const Activity = ({ isEvent }) => {
  const { job, edit, setEdit } = useOutletContext();
  const { activityId } = useParams();
  const { activities } = job;

  const activity = activities.find(activity => activity.id === activityId);
  isEvent = activity?.type === 'event';
  const maxLength = 250;

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
        <section className='activity-details-group flow'>
          {activity
            ? isEvent
              ? <Event activity={activity} maxLength={maxLength} />
              : <Task activity={activity} maxLength={maxLength} />
            : null }
        </section>
      </main>
    </>
  );
};
