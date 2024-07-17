export const SERVICE_URL = `http://localhost:3000`;

export const endpoints = {
  login: `${SERVICE_URL}/login`,
  jobs: {
    list: `${SERVICE_URL}/jobs`,
    find: jobId => `${SERVICE_URL}/jobs/${jobId}`,
    activities: {
      add: jobId => `${SERVICE_URL}/jobs/${jobId}/activities`,
      update: (jobId, activityId) => `${SERVICE_URL}/jobs/${jobId}/activities/${activityId}`,
      delete: (jobId, activityId) => `${SERVICE_URL}/jobs/${jobId}/activities/${activityId}`,
    },
  },
  users: {
    create: `${SERVICE_URL}/user`,
  },
};

export const links = {
  login: '/',
  signIn: '/sign-in',
  jobs: {
    list: '/jobs',
    new: '/jobs/new',
    role: jobId => `/jobs/${jobId}/role`,
    activity: {
      events: {
        new: jobId => `/jobs/${jobId}/activity/events/new`,
      },
      tasks: {
        new: jobId => `/jobs/${jobId}/activity/tasks/new`,
      },
    },
  },
};
