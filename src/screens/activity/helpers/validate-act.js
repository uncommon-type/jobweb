export const validateActivity = (data) => {
  let errors = [];

  if (!data.title) {
    errors = [...errors, { name: 'activity', message: 'Title is required' }];
  }

  if (data.type === 'event' && !data.startDate) {
    errors = [...errors, { name: 'activity', message: 'Start date is required' }];
  }

  if (!data.description) {
    errors = [...errors, { name: 'description', message: 'Activity description is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
