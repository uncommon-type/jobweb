import { useOutletContext, redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { authenticate } from '@helpers/token';
import { postJobTag, deleteJobTag } from '@network/jobs';
import { validateErrors } from '@screens/addJob/helpers/validate-job';

import { EditOfferTabPanel } from './EditOfferTabPanel';
import { ViewOfferTabPanel } from './ViewOfferTabPanel';

export const deleteTagAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;

  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const { tagId } = formValues;

  try {
    return await deleteJobTag(jobId, tagId, token);
  }
  catch (err) {
    console.error('Error caught while attempting to delete a job tag)', err);
    throw new Response('', {
      status: err.status,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const addProTagAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;

  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const { title: tag } = formValues;

  try {
    if (tag) {
      return await postJobTag({ id: uuidv4(), title: tag, type: 'pro', tabName: 'offer' }, token, jobId);
    }

    return [{ name: 'pro', message: 'This field is required' }];
  }

  catch (err) {
    console.error('Error caught while attempting to add a pro tag', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
    return validateErrors(err.errors);
  }
};

export const addConTagAction = async ({ request, params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const { jobId } = params;

  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const { title: tag } = formValues;

  try {
    if (tag) {
      return await postJobTag({ id: uuidv4(), title: tag, type: 'con', tabName: 'offer' }, token, jobId);
    }

    return [{ name: 'con', message: 'This field is required' }];
  }

  catch (err) {
    console.error('Error caught while attempting to add a con tag', err);
    if (err.status !== 400) {
      throw new Response('', {
        status: err.status || 500,
        statusText: err.statusText || 'Something went wrong',
      });
    }
    return validateErrors(err.errors);
  }
};

export const OfferTabPanel = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditOfferTabPanel />;
  }

  return <ViewOfferTabPanel />;
};
