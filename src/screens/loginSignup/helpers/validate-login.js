export const validateLogin = (data) => {
  let errors = [];

  if (!data.username) {
    errors = [
      ...errors,
      { name: 'email', message: "That doesn't look like a valid email" },
    ];
  }

  if (!data.password) {
    errors = [
      ...errors,
      { name: 'password', message: "That doesn't look like a valid password" },
    ];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
