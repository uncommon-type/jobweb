export const validate = (activity) => {
  let errors = [];

  if (!activity.title) {
    errors = [...errors, { name: 'title', message: 'This field is required' }];
  }

  if (activity.type === 'event' && !activity.startDate) {
    errors = [...errors, { name: 'activity', message: 'This field is required' }];
  }

  if (!activity.description) {
    errors = [...errors, { name: 'description', message: 'This field is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
