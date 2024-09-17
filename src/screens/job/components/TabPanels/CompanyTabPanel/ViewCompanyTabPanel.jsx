import { useOutletContext } from 'react-router-dom';

import { JobDetail } from '../JobDetail';

export const ViewCompanyTabPanel = () => {
  const { job } = useOutletContext();
  const { company, benefits } = job;

  return (
    <div className='flow'>
      <JobDetail title='Description' content={company.description || 'n/a'} />
      <JobDetail title='Benefits' content={benefits || 'n/a'} />
      <JobDetail title='Size' content={company.size || 'n/a'} />
    </div>
  );
};
