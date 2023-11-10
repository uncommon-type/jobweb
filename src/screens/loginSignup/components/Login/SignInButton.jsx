import { Spinner } from '@screens/common/Spinner';

export const SignInButton = ({ loading, disabled }) => {
  return (
    <button
      type="submit"
      className="button"
      data-type="primary"
      disabled={disabled}
    >
      {loading ? (
        <>
          <span> Signing in</span>
          <Spinner />
        </>
      ) : (
        'Sign in'
      )}
    </button>
  );
};
