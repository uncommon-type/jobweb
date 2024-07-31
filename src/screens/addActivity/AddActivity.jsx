import { redirect, useActionData, useOutletContext, Form } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { postJobActivity } from '@network/jobs';
import { validateActivity } from './helpers/validate-activity';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewActivity } from './components/NewActivity';

export const action = async ({ request }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const formData = await request.formData();

  const {
    jobId,
    type,
    activityTitle,
    activityStatus = false,
    time,
    date,
    description,
  } = Object.fromEntries(formData);

  const activityToAdd = {
    id: uuidv4(),
    type,
    done: activityStatus ? true : false,
  };

  if (activityTitle) {
    activityToAdd.title = activityTitle;
  }

  if (description) {
    activityToAdd.description = description;
  }

  if (time && date) {
    activityToAdd.startDate = new Date(`${date} ${time}`).toISOString();
  }

  const errors = validateActivity(activityToAdd);

  if (errors.length !== 0) {
    return { errors };
  }

  try {
    await postJobActivity(activityToAdd, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  }
  catch (err) {
    console.error('Error caught while attempting to post an activity in activity action', err);
    throw new Response('', { status: err.status || 500, statusText: 'Something went wrong' });
  }
};

export const AddActivity = ({ isEvent = false }) => {
  const { job } = useOutletContext();
  const actionData = useActionData() || {};
  const errors = actionData?.errors || [];

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${job.id}/activity`} />
      </Header>
      <main>
        <section className='add-activity-group flow'>
          <NewActivityTabs jobId={job.id} />
          <Form method='post' className='flow' noValidate>
            <NewActivity jobId={job.id} errors={errors} type={isEvent ? 'event' : 'task'} />
          </Form>
        </section>
      </main>
    </>
  );
};
