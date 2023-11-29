import { v4 as uuidv4 } from 'uuid';

import { getSchemaErrors } from './schema-errors';

export const baseUrl = `http://localhost:3000`;

export const requestToken = async (userCredentials) => {
  const url = `${baseUrl}/login`;
  return await sendData(url, userCredentials);
};

class ResponseError extends Error {
  constructor(message, errors) {
    super(message);
    this.errors = errors;
  }
}

export const handleError = ({ status = '', invalid_params = {} }) => {
  if (status === 400) {
    const validationErrors = getSchemaErrors(invalid_params);

    if (validationErrors.length === 0) {
      throw new ResponseError('Something went wrong', []);
    }

    throw new ResponseError('Bad request', validationErrors);
  }

  if (status === 401) {
    throw new ResponseError('Unauthorised', []);
  }

  if (status === 500) {
    throw new ResponseError('Something went wrong', []);
  }

  throw new Error('An unknown error occured', []);
};

const addIdToPayload = (payload) => {
  const id = uuidv4();
  return { id, ...payload };
};

export const callServer = async (method, url, data, token) => {
  try {
    const config = {
      method,
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
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

export const sendData = (url, data, token) => {
  if (Object.keys(data).length === 0) {
    throw new Error('Expecting data');
  }

  return callServer('POST', url, addIdToPayload(data), token);
};

export const getData = (url, token, data) => {
  const fetchUrl = new URL(url);

  if (data) {
    fetchUrl.search = new URLSearchParams(data);
  }

  return callServer('GET', fetchUrl, {}, token);
};

export const updateData = (url, data, token) => {
  return callServer('PUT', url, data, token);
};

export const deleteData = (url, token) => {
  return callServer('DELETE', url, {}, token);
};
