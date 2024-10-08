import { redirect, useActionData, useOutletContext, Form, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { validate } from '@helpers/validate';
import { validateErrors } from '@screens/addJob/helpers/validate-job';
import { postJobActivity } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewActivity } from './components/NewActivity';

export const addActivityAction = async ({ request }) => {
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
    done: activityStatus === 'on' ? true : false,
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

  const errors = validate(activityToAdd);

  if (errors.length !== 0) {
    return validateErrors(errors);
  }

  try {
    await postJobActivity(activityToAdd, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  }
  catch (err) {
    console.error('Error caught while attempting to add an activity', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }

    return validateErrors(err.errors);
  }
};

export const AddActivity = ({ isEvent = false }) => {
  const { job, setEdit } = useOutletContext();
  const navigate = useNavigate();

  const actionData = useActionData();
  const errors = actionData?.length ? actionData : [];

  const handleOnCancel = () => {
    setEdit(false);
    navigate(`/jobs/${job.id}/activity`);
  };

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${job.id}/activity`} />
      </Header>
      <main>
        <section className='add-activity-group flow'>
          <NewActivityTabs jobId={job.id} />
          <Form method='post' className='flow' noValidate>
            <NewActivity jobId={job.id} type={isEvent ? 'event' : 'task'} errors={errors} onCancel={handleOnCancel} />
          </Form>
        </section>
      </main>
    </>
  );
};
