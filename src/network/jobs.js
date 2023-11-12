import { jobData } from '@helpers/defaultData';

export const getJob = (jobId) => {
  return Object.values(jobData).find((job) => {
    return job.id === jobId;
  });
};
