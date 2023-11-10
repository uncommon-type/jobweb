import { createContext } from 'react';

import { useLocalStorage } from '@hooks/useLocalStorage';
import { isTokenExpired } from '@helpers/token';
import { requestToken } from '@network/network';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useLocalStorage('authContext', {
    authed: false,
    token: '',
  });

  const login = async (userCredentials) => {
    const { token } = await requestToken(userCredentials);
    setState({ ...state, token });
  };

  const logout = () => {
    setState({ ...state, authed: false, token: '' });
  };

  const context = {
    authed: !isTokenExpired(state.token),
    login,
    logout,
    token: state.token,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
