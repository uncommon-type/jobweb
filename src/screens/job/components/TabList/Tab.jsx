import { NavLink } from 'react-router-dom';

export const Tab = ({ label, path, onChange }) => {
  const from = '/jobs';

  return (
    <li>
      <NavLink
        to={path}
        replace
        state={{ from }}
        aria-label={`View ${label}`}
        onClick={onChange}
      >
        {label}
      </NavLink>
    </li>
  );
};
