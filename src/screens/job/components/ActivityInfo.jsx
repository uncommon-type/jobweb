import { redirect, useOutletContext, useActionData, useSubmit, Form } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { updateJobActivity } from '@network/jobs';

import { LinkToAddActivity } from './LinkToAddActivity';
import { CheckboxGroup } from '@screens/common/Inputs/CheckboxGroup';
import { Alert } from '@screens/common/Alert';

export const action = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;
  const formData = await request.formData();
  const activityData = Object.fromEntries(formData);
  activityData.done = JSON.parse(activityData.done);

  try {
    await updateJobActivity(activityData, token, jobId);
    return redirect(`/jobs/${jobId}/activity`);
  } catch (err) {
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong'
      })
    }
    return err.errors;
  }
};

export const ActivityInfo = () => {
  const { job, edit } = useOutletContext();
  const { activities } = job;
  const actionData = useActionData() || [];
  const submit = useSubmit();

  const handleChange = (e) => {
    const activity = activities.find((activity) => {
      return activity.id === e.target.id;
    })

    activity.done = e.target.checked;
    submit({ id: e.target.id, done: activity.done }, { method: 'PUT' })
  };

  return (
    <>
      <LinkToAddActivity jobId={job.id} />
      {activities.length !== 0 ?
        <Form method='put'>
          <CheckboxGroup options={activities} jobId={job.id} edit={edit} onChange={handleChange} />
        </Form>
        : null
      }
      {actionData.length !== 0
        ? actionData.map((error) => <Alert key={error.message} message={error.message} />)
        : null}
    </>
  );
};
