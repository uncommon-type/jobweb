import { Form } from 'react-router-dom';

import { EmailField } from '../common/EmailField';
import { PasswordField } from '../common/PasswordField';
import { SignInButton } from './SignInButton';
import { LinkToSignUp } from './LinkToSignUp';
import { Alert } from '@screens/common/Alert';

export const LoginForm = ({
  from,
  onChange,
  isSigningIn,
  errors,
  onLinkAction,
}) => {
  return (
    <>
      <h1>Welcome back. Please sign in.</h1>
      <Form method="post" className="login-form flow">
        <EmailField from={from} onChange={onChange} loading={isSigningIn} />
        <PasswordField onChange={onChange} loading={isSigningIn} />
        <div className="action-group flow flow-space-l">
          <SignInButton isSigningIn={isSigningIn} disabled={isSigningIn} />
          <span className="cluster">
            Need an account?
            <LinkToSignUp
              isSigningIn={isSigningIn}
              onLinkAction={onLinkAction}
            />
          </span>
        </div>
      </Form>
      {errors.length !== 0 ? <Alert message="Login failed" /> : null}
    </>
  );
};
