import { JobDetail } from '../JobDetail';

export const ViewCompanyInfo = ({ job }) => (
  <div className='flow'>
    <JobDetail title='Description' content={job.company.description} />
    <JobDetail title='Benefits' content={job.benefits} />
    <JobDetail title='Size' content={job.company.size} />
  </div>
);
