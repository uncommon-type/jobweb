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
