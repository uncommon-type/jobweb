import { Spinner } from '@screens/common/Spinner';

export const SignInButton = ({ isSigningIn }) => (
  <button
    type='submit'
    className='button'
    data-type='primary'
    disabled={isSigningIn}
  >
    {isSigningIn
      ? (
          <>
            <span>Signing in...</span>
            <Spinner />
          </>
        )
      : (
          <span>Sign in</span>
        )}
  </button>
);
