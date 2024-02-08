import { Link } from 'react-router-dom';

export const CardActions = ({ jobId }) => {
  return (
    <div className="cluster">
      <Link
        to={`${jobId}/role`}
        className="button"
        data-type="secondary"
        aria-label="View job"
      >
        View
      </Link>

      <button className="button" data-type="secondary">
        Remove
      </button>
    </div>
  );
};
