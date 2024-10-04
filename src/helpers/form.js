export const getUserInput = (e) => {
  const data = new FormData(e.target);
  return Object.fromEntries(data.entries());
};

const hasNoEmptyValues = (data) => {
  return Object.values(data).every(value => value);
};

export const isValid = (data) => {
  if (!hasNoEmptyValues(data)) {
    return false;
  }

  return true;
};

export const getErrorMessage = (errors, fieldName) => {
  const error = errors?.find(error => error.name === fieldName);
  return error?.message;
};

export function deleteError(formErrors, fieldName) {
  const { errors: errorFields } = formErrors;

  return {
    ...formErrors,
    message: '',
    errors: errorFields.filter(field => field.name !== fieldName),
  };
}

export const showFormAlert = ({ message, errors }) => {
  return message !== '' && errors?.length === 0;
};

export const formatMoney = (value) => {
  const options = {
    currency: 'GBP',
    style: 'currency',
    maximumFractionDigits: value % 1 ? 2 : 0,
  };

  const { format } = new Intl.NumberFormat('en-UK', options);
  return format(value);
};
