import { Link } from 'react-router-dom';
import { PencilSquareIcon as EditIcon, ArrowUturnLeftIcon as GoBackIcon } from '@heroicons/react/24/outline';

export const SecondaryNav = ({ fromLink, title, onEdit, showEdit }) => (
  <nav>
    <ul role='list' className='secondary-nav-list cluster'>
      <li>
        <Link to={fromLink} aria-label='Go back'>
          <GoBackIcon />
        </Link>
      </li>
      {title && <li className='title'>{title}</li>}

      {showEdit ? <EditIcon onClick={onEdit} /> : null}
    </ul>
  </nav>
);
