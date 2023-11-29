const isTokenExpired = (token) => {
  if (!token) return true;
  const expiry = JSON.parse(atob(token.split('.')[1])).exp;
  return Math.floor(new Date().getTime() / 1000) >= expiry;
};

const isTokenValid = (token) => {
  if (!token || isTokenExpired(token)) {
    return false;
  }
  return true;
};

const handleInvalidToken = () => {
  localStorage.removeItem('token');
};

const getToken = () => {
  const token = localStorage.getItem('token') || '';
  return token;
};

export const authenticate = () => {
  const token = getToken('token');

  if (!isTokenValid(token)) {
    handleInvalidToken();
    return null;
  }

  return token;
};
