export const validateActivity = (data) => {
  let errors = [];

  if (!data.activityTitle) {
    errors = [...errors, { name: 'activity', message: 'Activity is required' }];
  }

  if (!data.time) {
    errors = [...errors, { name: 'time', message: 'Time is required' }];
  }

  if (!data.date) {
    errors = [...errors, { name: 'date', message: 'Date is required' }];
  }

  if (!data.description) {
    errors = [...errors, { name: 'description', message: 'Description is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};
