import { Form, redirect } from 'react-router-dom';

import { sendData } from '@network/network';
import { endpoints } from '@helpers/constants';
import { getErrorMessage } from '@helpers/form';
import { validateSignup } from '@screens/loginSignup/helpers/validate-signup';

import { NameField } from './NameField';
import { EmailField } from '../common/EmailField';
import { PasswordField } from '../common/PasswordField';
import { SignUpButton } from './SignupButton';
import { LinkToSignIn } from './LinkToSignIn';
import { Alert } from '@screens/common/Alert';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData);

  const errors = validateSignup({ name, email, password });

  if (errors.length !== 0) {
    return errors;
  }

  try {
     await sendData(endpoints.users.create, { name, email, password });
     return redirect('/');
  } catch (err) {
    console.error('Error caught while creating a user', err);
    return ['Sign up failed'] ;
  }
};

export const SignupForm = ({ onChange, isSigningUp, errors, onLinkAction }) => {
  return (
    <>
      <h1>Please sign up.</h1>
      <Form method='post' className='login-form flow' replace>
        <NameField
          onChange={onChange}
          error={getErrorMessage(errors, 'name')}
          loading={isSigningUp}
        />
        <EmailField
          onChange={onChange}
          error={getErrorMessage(errors, 'email')}
          loading={isSigningUp}
        />
        <PasswordField
          onChange={onChange}
          error={getErrorMessage(errors, 'password')}
          loading={isSigningUp}
        />
        <div className='action-group flow flow-space-l'>
          <SignUpButton isSigningUp={isSigningUp} />
          <span className='cluster'>
            Have an account?
            <LinkToSignIn
              isSigningUp={isSigningUp}
              onLinkAction={onLinkAction}
            />
          </span>
        </div>
      </Form>
      {errors.length !== 0 ? <Alert message='Sign up failed' /> : null}
    </>
  );
};
