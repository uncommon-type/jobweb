import { NavLink } from 'react-router-dom';

const NAVLINKS = [
  { label: 'Role', path: 'role' },
  { label: 'Company', path: 'company' },
  { label: 'Activity', path: 'activity' },
];

export const JobTabs = () => {
  const from = '/jobs';

  return (
    <nav className="job-details-tabs">
      <ul role="list" className="job-details-tablist cluster">
        {NAVLINKS.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              replace
              state={{ from }}
              aria-label={`View ${label}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
