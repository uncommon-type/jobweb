import { useState, useEffect } from 'react';
import { redirect, useActionData, useNavigation } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { baseUrl } from '@network/network';
import { requestToken, sendData } from '@network/network';
import { isValid } from '@helpers/form';

import { SigninSignupForm } from './components/SigninSignupForm';
import { Alert } from '@screens/common/Alert';

export const signinLoader = () => {
  const token = authenticate();

  if (token) {
    return redirect('/jobs');
  }

  return null;
};

export const signinAction = async ({ request }) => {
  const formData = await request.formData();
  const { email: username, password } = Object.fromEntries(formData);

  if (!isValid({ username, password })) {
    return { message: 'Sign in failed' };
  }

  try {
    const { token } = await requestToken({ username, password });
    localStorage.setItem('token', token);
    return redirect('/jobs');
  }
  catch (err) {
    return { message: 'Sign in failed' };
  }
};

export const signupAction = async ({ request }) => {
  const formData = await request.formData();
  const { name, email, password } = Object.fromEntries(formData);
  const url = `${baseUrl}/user`;

  if (!isValid({ name, email, password })) {
    return { message: 'Sign up failed' };
  }

  try {
    await sendData(url, { name, email, password });
  }
  catch (err) {
    return { message: 'Sign up failed' };
  }

  return redirect('/');
};

export const SigninSignup = ({ isGuest = false }) => {
  const actionData = useActionData() || {};
  const [error, setError] = useState(actionData);
  const { formData, state } = useNavigation();
  const isLoading = formData != null && state === 'loading';

  useEffect(() => {
    if (Object.keys(actionData).length > 0) {
      setError(actionData);
    }
  }, [actionData]);

  useEffect(() => {
    setError({});
  }, [isGuest]);

  const handleChange = () => {
    setError({});
  };

  const handleLinkAction = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className='login-group'>
        <div className='login-group__inner flow flow-space-xs'>
          <SigninSignupForm
            isGuest={isGuest}
            onLinkAction={handleLinkAction}
            isLoading={isLoading}
            error={error}
            onChange={handleChange}
          />
          {Object.keys(error).length !== 0 ? <Alert message={error.message || 'Something went wrong'} /> : null}
        </div>
      </section>
    </main>
  );
};
