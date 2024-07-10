import { endpoints } from '@helpers/constants';
import { getData, sendData, updateData, deleteData } from './network';

export const getJobs = async (token) => {
  return await getData(endpoints.jobs.list, token, {});
};

export const getJob = async (jobId, token) => {
  return await getData(endpoints.jobs.find(jobId), token, {});
};

export const postJob = async (jobToAdd, token) => {
  return await sendData(endpoints.jobs.list, jobToAdd, token);
};

export const updateJob = async (jobId, jobToUpdate, token) => {
  return await updateData(endpoints.jobs.find(jobId), jobToUpdate, token);
};

export const deleteJob = async (jobId, token) => {
  return await deleteData(endpoints.jobs.find(jobId), token);
};

export const postJobActivity = async (activityToAdd, token, jobId) => {
  return await sendData(endpoints.jobs.activities.add(jobId), activityToAdd, token);
};

export const updateJobActivity = async (activityToUpdate, token, jobId) => {
  return await updateData(endpoints.jobs.activities.update(jobId, activityToUpdate.id), activityToUpdate, token);
};

export const deleteJobActivity = async (jobId, activityId, token) => {
  return await deleteData(endpoints.jobs.activities.delete(jobId, activityId), token);
};
