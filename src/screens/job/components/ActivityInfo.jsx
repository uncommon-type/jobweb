import { redirect, useOutletContext, useFetcher } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { updateJobActivity, deleteJobActivity } from '@network/jobs';

import { LinkToAddActivity } from './LinkToAddActivity';
import { CheckboxGroup } from '@screens/common/Inputs/CheckboxGroup';

export const action = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);

  if (request.method === 'PUT') {
    formValues.done = JSON.parse(formValues?.done);

    try {
      return await updateJobActivity(formValues, token, jobId);
    }
    catch (err) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
  }

  if (request.method === 'DELETE') {
    try {
      return await deleteJobActivity(jobId, formValues.id, token);
    }
    catch (err) {
      console.error('Error caught while attempting to delete an activity in activity action)', err);
      throw new Response('', {
        status: err.status,
        statusText: err.statusText || 'Something went wrong',
      });
    }
  }

  throw new Response('', {
    status: 500,
    statusText: `Invalid request method: ${request.method} ?? "Missing"`,
  });
};

export const ActivityInfo = () => {
  const { job, edit } = useOutletContext();
  const { id, activities } = job;
  const fetcher = useFetcher();

  const handleChange = async (e) => {
    fetcher.submit({ id: e.target.id, done: e.target.checked }, { method: 'PUT', action: `/jobs/${id}/activity` });
  };

  const handleOptionRemove = async (e) => {
    fetcher.submit({ id: e.currentTarget.id }, { method: 'DELETE', action: `/jobs/${id}/activity` });
  };

  return (
    <>
      <LinkToAddActivity jobId={id} />
      {activities.length !== 0
        ? (
            <CheckboxGroup
              options={activities}
              jobId={id}
              edit={edit}
              onChange={handleChange}
              onRemove={handleOptionRemove}
            />
          )
        : null}
    </>
  );
};
