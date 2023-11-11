import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink to="/jobs" aria-label="View jobs" className="stack title shadow">
      Job Tracker
    </NavLink>
  );
};
