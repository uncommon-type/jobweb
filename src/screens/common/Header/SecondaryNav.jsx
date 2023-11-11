import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon as GoBackIcon } from '@heroicons/react/24/outline';

export const SecondaryNav = ({ fromLink }) => {
  return (
    <nav>
      <ul role="list" className="secondary-nav-list cluster">
        <li>
          <Link to={fromLink} aria-label="Go back">
            <GoBackIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
