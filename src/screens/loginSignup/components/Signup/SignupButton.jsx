import { Spinner } from '@screens/common/Spinner';

export const SignUpButton = ({ isSigningUp }) => (
  <button
    type='submit'
    className='button'
    data-type='primary'
    disabled={isSigningUp}
  >
    {isSigningUp
      ? (
          <>
            <span>Signing up...</span>
            <Spinner />
          </>
        )
      : (
          <span>Sign up</span>
        )}
  </button>
);
