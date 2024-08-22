import { redirect, useActionData, useOutletContext, Form } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { validateActivity } from './helpers/validate-activity';
import { validateErrors } from '@screens/addJob/helpers/validate-job';
import { postJobActivity } from '@network/jobs';

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
    return errors;
  }

  try {
    await postJobActivity(activityToAdd, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  }
  catch (err) {
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

  const actionData = useActionData();
  const errors = actionData?.length ? actionData : [];

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${job.id}/activity`} />
      </Header>
      <main>
        <section className='add-activity-group flow'>
          <NewActivityTabs jobId={job.id} />
          <Form method='post' className='flow' noValidate>
            <NewActivity jobId={job.id} errors={errors} type={isEvent ? 'event' : 'task'} onEdit={setEdit} />
          </Form>
        </section>
      </main>
    </>
  );
};
