export const validateLogin = (data) => {
  let errors = [];

  if (!data.username) {
    errors = [...errors, { name: 'email', message: 'Email is required' }];
  }

  if (!data.password) {
    errors = [...errors, { name: 'password', message: 'Password is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
