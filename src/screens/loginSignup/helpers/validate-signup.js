export const validateSignup = (data) => {
  let errors = [];

  if (!data.name) {
    errors = [
      ...errors,
      { name: 'name', message: 'You need to give your name' },
    ];
  }

  if (!data.email) {
    errors = [
      ...errors,
      { name: 'email', message: 'That doesn\'t look like a valid email' },
    ];
  }

  if (!data.password) {
    errors = [
      ...errors,
      { name: 'password', message: 'That doesn\'t look like a valid password' },
    ];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
