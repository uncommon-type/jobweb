import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const LinkToSignUp = ({ isSigningIn, onLinkAction }) => {
  if (isSigningIn) {
    return (
      <Link
        to={''}
        onClick={onLinkAction}
        aria-label="Sign up"
        className="with-icon"
      >
        Sign up
        <ArrowLongRightIcon />
      </Link>
    );
  }

  return (
    <Link to={'/signup'} aria-label="Sign up" className="with-icon">
      Sign up
      <ArrowLongRightIcon />
    </Link>
  );
};
