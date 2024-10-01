import { redirect, useOutletContext } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { updateJobActivity, deleteJobActivity } from '@network/jobs';

import { LinkToAddActivity } from './LinkToAddActivity';
import { CheckboxGroup } from '@screens/common/Inputs/CheckboxGroup';

export const updateActivityStatusAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;
  const formData = await request.formData();
  const { id, activityStatus, type } = Object.fromEntries(formData);

  const activityToUpdate = {
    id,
    type,
    done: activityStatus === 'true' ? true : false,
  };

  try {
    return await updateJobActivity(activityToUpdate, token, jobId);
  }
  catch (err) {
    console.error('Error caught while attempting to update an activity status', err);
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const deleteActivityAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);

  try {
    return await deleteJobActivity(jobId, formValues.id, token);
  }
  catch (err) {
    console.error('Error caught while attempting to delete an activity', err);
    throw new Response('', {
      status: err.status,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const ActivityTabPanel = () => {
  const { job } = useOutletContext();
  const { id, activities } = job;

  return (
    <>
      <LinkToAddActivity jobId={id} />
      {activities.length !== 0
        ? (
            <CheckboxGroup options={activities} jobId={id} />
          )
        : null}
    </>
  );
};
