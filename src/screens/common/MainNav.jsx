import { NavLink } from 'react-router-dom';

export const MainNav = () => {
  return (
    <nav>
      <ul role="list" className="cluster">
        <li>
          <NavLink aria-label="Add a job" to="/jobs/new" className="stack">
            Add a job
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            className="naked-btn stack"
          >
            <span>Sign out </span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
