export const validateActivity = (data) => {
  let errors = [];

  if (!data.title) {
    errors = [...errors, { name: 'title', message: 'This field is required' }];
  }

  if (data.type === 'event' && !data.startDate) {
    errors = [...errors, { name: 'time', message: 'This field is required' }];
  }

  if (!data.description) {
    errors = [...errors, { name: 'description', message: 'This field is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
