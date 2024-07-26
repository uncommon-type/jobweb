import { NavLink } from 'react-router-dom';

import { links } from '@helpers/constants';

export const Logo = () => (
  <NavLink
    to={links.jobs.list}
    aria-label='View jobs'
    className='stack title'
  >
    Job Tracker
  </NavLink>
);
