import { SignInLink } from './SignInLink';

export const SignInPrompt = ({ loading }) => {
  return (
    <span className="cluster">
      Have an account?
      <SignInLink loading={loading} />
    </span>
  );
};
