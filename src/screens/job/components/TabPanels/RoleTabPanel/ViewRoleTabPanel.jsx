import { useOutletContext } from 'react-router-dom';

import { formatMoney } from '@helpers/form';

import { JobDetail } from '../JobDetail';

export const ViewRoleTabPanel = () => {
  const { job } = useOutletContext();
  const { status, description, employmentType, location, salary } = job;

  return (
    <div className='flow'>
      <JobDetail title='Stage' content={status} />
      <JobDetail title='Description' content={description || 'n/a'} />
      <JobDetail title='Employment type' content={employmentType} />
      <JobDetail title='Location' content={location} />
      <JobDetail title='Salary per year' content={salary ? formatMoney(salary) : 'n/a'} />
    </div>
  );
};
