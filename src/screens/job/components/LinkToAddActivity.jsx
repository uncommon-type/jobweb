import { Link, useParams } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const LinkToAddActivity = () => {
  const { jobId } = useParams();
  return (
    <Link
      to={`/jobs/${jobId}/activity/events/new`}
      state={{ from: `/jobs/${jobId}/activity` }}
      data-type="secondary"
      className="button button-lg"
    >
      <span className="with-icon">
        Add task or event
        <ArrowLongRightIcon />
      </span>
    </Link>
  );
};
