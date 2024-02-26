import { getData, sendData, updateData, deleteData } from './network';
import { baseUrl } from './network';

export const getJobs = async (token) => {
  return await getData(`${baseUrl}/jobs`, token, {});
};

export const getJob = async (jobId, token) => {
  return await getData(`${baseUrl}/jobs/${jobId}`, token, {});
};

export const postJob = async (jobToAdd, token) => {
  return await sendData(`${baseUrl}/jobs`, jobToAdd, token);
};

export const updateJob = async (jobId, jobToUpdate, token) => {
  return await updateData(`${baseUrl}/jobs/${jobId}`, jobToUpdate, token);
};

export const deleteJob = async (jobId, token) => {
  return await deleteData(`${baseUrl}/jobs/${jobId}`, token);
};

export const postJobActivity = async (activityToAdd, token, jobId) => {
  return await sendData(`${baseUrl}/jobs/${jobId}/activities`, activityToAdd, token);
};
