import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon as GoBackIcon, PencilSquareIcon as EditIcon } from '@heroicons/react/24/outline';

export const SecondaryNav = ({ fromLink, title, showEdit }) => {
  return (
    <nav>
      <ul role="list" className="secondary-nav-list cluster">
        <li>
          <Link to={fromLink} aria-label="Go back">
            <GoBackIcon />
          </Link>
        </li>
        {title && <li className="title">{title}</li>}
        {showEdit ? <EditIcon /> : null}
      </ul>
    </nav>
  );
};
