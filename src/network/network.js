import { v4 as uuidv4 } from 'uuid';
import { getSchemaErrors } from './schema-errors';

export const baseUrl = `http://localhost:3000`;

export const requestToken = async (userCredentials) => {
  const url = `${baseUrl}/login`;
  return await sendData(url, { data: userCredentials });
};

class ResponseError extends Error {
  constructor(message, errors) {
    super(message);
    this.errors = errors;
  }
}

export const handleError = ({ status, invalid_params }) => {
  if (status === 400) {
    const validationErrors = getSchemaErrors(invalid_params);

    if (validationErrors.length === 0) {
      throw new ResponseError('Something went wrong', []);
    }

    throw new ResponseError('Bad request', validationErrors);
  }

  if (status === 500) {
    throw new ResponseError('Something went wrong', []);
  }

  throw new Error('An unknown error occured', []);
};

const addToPayload = (payload) => {
  const id = uuidv4();
  return { id, ...payload };
};

export const sendData = async (url, { data, token }) => {
  try {
    const config = {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addToPayload(data)),
    };

    const res = await fetch(url, config);

    if (!res.ok) {
      const err = await res.json();
      err.status = res.status;
      throw err;
    }

    const responseData = await res.json();
    return responseData;
  } catch (err) {
    handleError(err);
  }
};
