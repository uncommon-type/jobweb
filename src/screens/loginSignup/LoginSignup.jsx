import { useState, useEffect } from 'react';
import {
  json,
  redirect,
  useLocation,
  useNavigation,
  useActionData,
} from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { requestToken } from '@network/network';
import { validateLogin } from './helpers/validate-login';
import { LoginForm } from './components/Login/LoginForm';
import { SignupForm } from './components/Signup/SignupForm';

export const loader = () => {
  const token = authenticate();

  if (token) {
    return redirect('/jobs');
  }

  return null;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { email: username, password } = Object.fromEntries(formData);

  const errors = validateLogin({ username, password });

  if (errors.length !== 0) {
    return json(errors);
  }

  try {
    const { token } = await requestToken({ username, password });

    localStorage.setItem('token', token);
  }
  catch (err) {
    return json(err.errors, { status: 422 });
  }

  const redirectTo = formData.get('redirectTo');

  return redirect(redirectTo || `/jobs`);
};

export function LoginSignup({ isGuest = false }) {
  const [errors, setErrors] = useState([]);
  const actionData = useActionData() || [];
  const navigation = useNavigation();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';

  useEffect(() => {
    if (actionData.length !== 0) {
      setErrors(actionData);
    }
  }, [actionData]);

  useEffect(() => {
    setErrors([]);
  }, [isGuest]);

  const handleChange = () => {
    setErrors([]);
  };

  const handleLinkAction = (e) => {
    e.preventDefault();
  };

  const isLoading = navigation.state !== 'idle' && navigation.formData !== null;

  return (
    <main>
      <section className='login-group'>
        <div className='login-group__inner flow flow-space-xs'>
          {isGuest
            ? (
                <SignupForm
                  errors={errors}
                  isSigningUp={isLoading}
                  onChange={handleChange}
                  onLinkAction={handleLinkAction}
                />
              )
            : (
                <LoginForm
                  errors={errors}
                  isSigningIn={isLoading}
                  onChange={handleChange}
                  onLinkAction={handleLinkAction}
                  from={from}
                />
              )}
        </div>
      </section>
    </main>
  );
}
