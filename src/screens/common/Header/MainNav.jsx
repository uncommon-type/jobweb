import { useFetcher, NavLink } from 'react-router-dom';
import {
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon as SignoutIcon,
} from '@heroicons/react/24/outline';


export const MainNav = () => {
  let fetcher = useFetcher();
  let isLoggingOut = fetcher.formData != null;

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
          <fetcher.Form method="post" action="/logout">
            <button
              className="naked-btn stack"
              type="submit"
              disabled={isLoggingOut}
            >
              <SignoutIcon />
              <span>{isLoggingOut ? 'Signing out...' : 'Sign out'}</span>
            </button>
          </fetcher.Form>
        </li>
      </ul>
    </nav>
  );
};
