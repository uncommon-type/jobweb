import { formatMoney } from '@helpers/form';

import { JobDetail } from '../JobDetail';

export const ViewRoleInfo = ({ job }) => (
  <div className='flow'>
    <JobDetail title='Stage' content={job.status} />
    <JobDetail title='Description' content={job.description} />
    <JobDetail title='Employment type' content={job.employmentType} />
    <JobDetail title='Location' content={job.location} />
    <JobDetail title='Salary per year' content={job.salary ? formatMoney(job.salary) : 'n/a'} />
  </div>
);
