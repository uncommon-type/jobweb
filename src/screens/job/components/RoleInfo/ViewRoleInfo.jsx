import { formatMoney } from '@helpers/form';

export const ViewRoleInfo = ({ job }) => {
  return (
    <div className="flow">
      <div>
        <h4 className="font-special">Description</h4>
        <p>{job.description || 'n/a'}</p>
      </div>

      <div>
        <h4 className="font-special">Employment type</h4>
        <p>{job.employmentType}</p>
      </div>
      <div>
        <h4 className="font-special">Location</h4>
        <p>{job.location}</p>
      </div>
      <div>
        <h4 className="font-special">Salary per year</h4>
        <p>{formatMoney(job.salary) || 'n/a'}</p>
      </div>
    </div>
  );
};
