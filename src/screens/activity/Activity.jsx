import { useState, useEffect } from 'react';
import { redirect, useOutletContext, useParams, useFetcher } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { validate } from '@helpers/validate';
import { validateErrors } from '@screens/addJob/helpers/validate-job';
import { updateJobActivity } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { EditableActivity } from './components/EditableActivity';

export const updateActivityAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;

  const formData = await request.formData();
  const { id, type, activityStatus, activityTitle, time, date, description }
      = Object.fromEntries(formData);

  const activityToUpdate = {
    id,
    type,
    done: activityStatus === 'on' ? true : false,
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

  const errors = validate(activityToUpdate);

  if (errors.length !== 0) {
    return validateErrors(errors);
  }

  try {
    return await updateJobActivity(activityToUpdate, token, jobId);
  }
  catch (err) {
    console.error('Error caught while attempting to update an activity', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
    return validateErrors(err.errors);
  }
};

export const Activity = ({ isEvent = false }) => {
  const { job } = useOutletContext();
  const { activities } = job;
  const { activityId } = useParams();
  const [edit, setEdit] = useState(false);
  const fetcher = useFetcher({ key: 'activity-fetcher' });
  const errors = fetcher?.data?.length ? fetcher.data : null;
  const activity = activities.find(activity => activity.id === activityId);

  useEffect(() => {
    if (fetcher.data && !errors) {
      setEdit(false);
    }
  }, [fetcher.data, errors]);

  const handleCancel = () => {
    setEdit(false);
  };

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
            ? <EditableActivity isEvent={isEvent} jobId={job.id} activity={activity} edit={edit} onCancel={handleCancel} errors={errors} />
            : null }
        </section>
      </main>
    </>
  );
};
