import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { baseUrl, sendData } from '@network/network';
import { getUserInput } from '@helpers/form';
import { requestToken } from '@network/network';

import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';

const defaultFormErrors = {
  message: '',
  errors: [],
};

export const LoginSignup = ({ isGuest = false }) => {
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  useEffect(() => {
    setFormErrors(defaultFormErrors);
  }, [isGuest]);

  const doLogin = async (userCredentials) => {
    try {
      setFormErrors(defaultFormErrors);
      setLoading(true);
      const jtoken = await requestToken(userCredentials);
      setLoading(false);
      navigate(locationState?.path || '/jobs');
    } catch (err) {
      console.error(err);
      setFormErrors({ message: 'Login failed', errors: [] });
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email: username, 'current-password': password } = getUserInput(e);
    await doLogin({ username, password });
  };

  const doSignup = async (userCredentials) => {
    try {
      const url = `${baseUrl}/user`;
      setLoading(true);
      await sendData(url, { data: userCredentials }); ///new
      setLoading(false);
      navigate('/');
    } catch (err) {
      setFormErrors({ message: err.message, errors: err.errors });
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, 'current-password': password } = getUserInput(e);
    await doSignup({ name, email, password });
  };

  return isGuest ? (
    <Signup
      handleSignup={handleSignup}
      formErrors={formErrors}
      setFormErrors={setFormErrors}
      loading={loading}
    />
  ) : (
    <Login
      handleLogin={handleLogin}
      formErrors={formErrors}
      setFormErrors={setFormErrors}
      loading={loading}
    />
  );
};
