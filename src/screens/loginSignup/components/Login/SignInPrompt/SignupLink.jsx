import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const SignUpLink = ({ loading }) => {
  return (
    <Link
      to={loading ? '' : '/signup'}
      aria-label="Sign up"
      className="with-icon"
    >
      Sign up
      <ArrowLongRightIcon />
    </Link>
  );
};
