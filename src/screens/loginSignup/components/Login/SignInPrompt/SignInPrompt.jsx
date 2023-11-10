import { SignUpLink } from './SignUpLink';

export const SignInPrompt = ({ loading }) => {
  return (
    <span className="cluster">
      Have an account?
      <SignUpLink loading={loading} />
    </span>
  );
};
