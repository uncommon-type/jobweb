import { Filter } from './Filter';

export const FilterGroup = ({ onFilterSelection, jobs }) => {
  const statuses = ['Interested', 'Applied', 'Interviewing', 'Offer received'];

  const statusCounts = Object.values(jobs).reduce((totals, job) => {
    totals[job.status] = totals[job.status] + 1 || 1;
    return totals;
  }, {});

  return (
    <ul role='list' className='filter-group cluster'>
      {statuses.map(status => (
        <Filter
          key={status}
          id={status}
          number={statusCounts[status] || 0}
          onFilterSelection={onFilterSelection}
        />
      ))}
    </ul>
  );
};
