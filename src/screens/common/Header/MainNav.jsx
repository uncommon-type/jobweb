import { NavLink, useNavigate } from 'react-router-dom';
import {
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon as SignoutIcon,
} from '@heroicons/react/24/outline';

import { useAuth } from '@hooks/useAuth';

export const MainNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <ul role="list" className="cluster">
        <li>
          <NavLink aria-label="Add a job" to="/jobs/new" className="stack">
            <PlusCircleIcon />
            Add a job
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            className="naked-btn stack"
            onClick={handleLogout}
          >
            <SignoutIcon />
            <span>Sign out </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
