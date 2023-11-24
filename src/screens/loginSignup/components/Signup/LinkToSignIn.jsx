import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const LinkToSignIn = ({ isSigningUp, onLinkAction }) => {
  if (isSigningUp) {
    return (
      <Link
        to={''}
        onClick={onLinkAction}
        aria-label="Sign in"
        className="with-icon"
      >
        Sign in
        <ArrowLongRightIcon />
      </Link>
    );
  }

  return (
    <Link to={'/'} aria-label="Sign in" className="with-icon">
      Sign in
      <ArrowLongRightIcon />
    </Link>
  );
};
