import { Link } from 'react-router-dom';
import { ArrowUturnLeftIcon as GoBackIcon, PencilSquareIcon as EditIcon } from '@heroicons/react/24/outline';

export const SecondaryNav = ({ fromLink, title, showEdit, onEdit }) => {
  return (
    <nav>
      <ul role="list" className="secondary-nav-list cluster">
        <li>
          <Link to={fromLink} aria-label="Go back">
            <GoBackIcon />
          </Link>
        </li>
        {title && <li className="title">{title}</li>}
        {showEdit ? <EditIcon onClick={onEdit} /> : null}
      </ul>
    </nav>
  );
};
