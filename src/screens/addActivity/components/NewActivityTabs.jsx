import { NavLink, useParams } from 'react-router-dom';

export const NewActivityTabs = () => {
  const { jobId } = useParams();

  const NAVLINKS = [
    { label: 'Event', path: `/jobs/${jobId}/activity/events/new` },
    { label: 'Task', path: `/jobs/${jobId}/activity/tasks/new` },
  ];

  //
  return (
    <nav className="activity-tabs">
      <ul role="list" className="activity-tab__list cluster">
        {NAVLINKS.map(({ label, path }) => (
          <li key={label}>
            <NavLink to={path} aria-label={`View ${label}`} className="title">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
