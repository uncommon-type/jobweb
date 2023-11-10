import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getUserInput } from '@helpers/form';

import { Login } from './components/Login/Login';
import { requestToken } from '@network/network';

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

  return isGuest ? (
    <h1>SignupForm View</h1>
  ) : (
    <Login
      handleLogin={handleLogin}
      formErrors={formErrors}
      setFormErrors={setFormErrors}
      loading={loading}
    />
  );
};
