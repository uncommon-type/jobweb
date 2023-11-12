import { Routes, Route, useLocation, useParams } from 'react-router-dom';

import { getJob } from '@network/jobs';

import { Activity } from '@screens/activity/Activity';
import { AddActivity } from '@screens/addActivity/AddActivity';
import { JobContent } from './components/JobContent';


export const Job = () => {
  const location = useLocation();
  const from = location.state?.from || '/jobs';
  const { jobId } = useParams();

  const job = getJob(jobId);

  return (
    <Routes>
      <Route
        path="activity/events/:activityId"
        element={<Activity job={job} />}
      />
      <Route
        path="activity/tasks/:activityId"
        element={<Activity job={job} />}
      />
      <Route
        path="activity/events/new"
        element={<AddActivity isEvent={true} />}
      />
      <Route
        path="activity/tasks/new"
        element={<AddActivity isEvent={false} />}
      />
      <Route path="*" element={<JobContent from={from} job={job} />} />
    </Routes>
  );
};
