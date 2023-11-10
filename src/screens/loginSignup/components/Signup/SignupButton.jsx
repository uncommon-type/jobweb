import { Spinner } from '@screens/common/Spinner';

export const SignupButton = ({ loading, disabled }) => {
  return (
    <button
      type="submit"
      className="button"
      data-type="primary"
      disabled={disabled}
    >
      {loading ? (
        <>
          <span>Signing up</span>
          <Spinner />
        </>
      ) : (
        'Sign up'
      )}
    </button>
  );
};
