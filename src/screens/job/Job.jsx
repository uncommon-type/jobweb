import { useLocation, useParams } from 'react-router-dom';

import { JobContent } from './components/JobContent';

export const jobData = {
  'job:99ee3214-05db-4c91-a237-a443205739b3': {
    id: '99ee3214-05db-4c91-a237-a443205739b3',
    status: 'Offer received',
    date: '3 days ago',
    jobTitle: 'Search Engineer',
    employmentType: 'Full-time',
    location: 'Remote',
    company: {
      id: '4e9cdb7f-1fe3-47e5-960c-58c79482cb22',
      name: 'Brave',
    },
  },
};

export const Job = () => {
  const location = useLocation();
  const from = location.state?.from || '/jobs';
  const { jobId } = useParams();

  return <JobContent from={from} job={jobData[`job:${jobId}`]} />;
};
