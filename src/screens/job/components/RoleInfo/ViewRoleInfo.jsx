import { formatMoney } from '@helpers/form';

export const ViewRoleInfo = ({ job }) => (
  <div className='flow'>
    <div>
      <h4 className='font-special'>Stage</h4>
      <p>{job.status}</p>
    </div>
    <div>
      <h4 className='font-special'>Description</h4>
      <p>{job.description || 'n/a'}</p>
    </div>
    <div>
      <h4 className='font-special'>Employment type</h4>
      <p>{job.employmentType || 'n/a'}</p>
    </div>
    <div>
      <h4 className='font-special'>Location</h4>
      <p>{job.location || 'n/a'}</p>
    </div>
    <div>
      <h4 className='font-special'>Salary per year</h4>
      <p>{job.salary ? formatMoney(job.salary) : 'n/a'}</p>
    </div>
  </div>
);
