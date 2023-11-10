import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const SignInLink = ({ loading }) => {
  return (
    <Link to={loading ? '' : '/'} aria-label="Sign in" className="with-icon">
      Sign in
      <ArrowLongRightIcon />
    </Link>
  );
};
