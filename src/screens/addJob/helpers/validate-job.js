export const validateJob = (data) => {
  let errors = [];

  if (!data.jobTitle) {
    errors = [...errors, { name: 'role', message: 'Role is required' }];
  }

  if (!data.company.name) {
    errors = [...errors, { name: 'company', message: 'Company is required' }];
  }

  if (!data.status) {
    errors = [...errors, { name: 'stage', message: 'Stage is required' }];
  }

  if (errors.length > 0) {
    return errors;
  }

  return [];
};

export const validateErrors = (errors) => {
  return errors.map((error) => {
    switch (error.name) {
      case 'jobTitle':
      case 'company':
      case 'status':
      case 'title':
      case 'description':
        error.message = 'This field is required';
        break;

      case 'salary':
        error.message = 'Must be greater than 0';
        break;

      case 'company/size':
        error.message = 'Must be at least 1';
        break;

      default:
        break;
    }
    return error;
  });
};
