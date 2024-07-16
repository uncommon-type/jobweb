import { NavLink } from 'react-router-dom';

import { links } from '@helpers/constants';

export const NewActivityTabs = ({ jobId }) => {
  const NAVLINKS = [
    { label: 'Event', path: links.jobs.activity.events.new(jobId) },
    { label: 'Task', path: links.jobs.activity.tasks.new(jobId) },
  ];

  return (
    <nav className='activity-tabs'>
      <ul role='list' className='activity-tab__list cluster'>
        {NAVLINKS.map(({ label, path }) => (
          <li key={label}>
            <NavLink to={path} aria-label={`View ${label}`} className='title'>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
