import { Filter } from './Filter';

const JOBS = [
  { id: 'Interested', number: 0 },
  { id: 'Applied', number: 0 },
  { id: 'Interviewing', number: 1 },
  { id: 'Offer Received', number: 1 },
];

export const FilterGroup = ({ jobs }) => (
  <ul role='list' className='filter-group cluster'>
    {JOBS.map(({ id, number }) => (
      <Filter
        key={id}
        id={id}
        number={number}
      />
    ))}
  </ul>
);
