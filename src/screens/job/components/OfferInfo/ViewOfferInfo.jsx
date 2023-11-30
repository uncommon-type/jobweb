import { formatMoney } from '@helpers/form';
import { ProsAndConsContainer } from './ProsAndCons/ProsAndConsContainer';

export const ViewOfferInfo = ({ job }) => {
  return (
    <form className="flow">
      <div>
        <h4 className="font-special">Salary per year</h4>
        <p>{formatMoney(job.salary) || 'n/a'}</p>
      </div>
      <div>
        <h4 className="font-special">Benefits</h4>
        {job.benefits || 'n/a'}
      </div>
      <div>
        <h4 className="font-special">Start date</h4>
        <p>{job.startDate || 'n/a'}</p>
      </div>
      <div>
        <h4 className="font-special">Probation</h4>
        <p>{job.probation || 'n/a'}</p>
      </div>
      <ProsAndConsContainer job={job} />
    </form>
  );
};
