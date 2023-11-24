export const validateSignup = (data) => {
  let errors = [];

  if (!data.name) {
    errors = [...errors, { name: 'name', message: 'Name is required' }];
  }

  if (!data.email) {
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
