import { v4 as uuidv4 } from 'uuid';

import { endpoints } from '@helpers/constants';
import { getSchemaErrors } from './schema-errors';

export const requestToken = async (userCredentials) => {
  return await sendData(endpoints.login, userCredentials);
};

class ResponseError extends Error {
  constructor(message, errors, status) {
    super(message);
    this.errors = errors;
    this.status = status;
    this.statusText = message; 
  }
}

export const handleError = ({ status = '', invalid_params = {} }) => {
  if (status === 400) {
    const validationErrors = getSchemaErrors(invalid_params);
  
    if (validationErrors.length === 0) {
      throw new ResponseError('Something went wrong', [], status);
    }

    throw new ResponseError('Bad request', validationErrors, status);
  }

  if (status === 401) {
    throw new ResponseError('Unauthorised', [], status);
  }

  if (status === 404) {
    throw new ResponseError('Not found', [], status);
  }

  if (status === 500) {
    throw new ResponseError('Something went wrong', [], status);
  }

  throw new Error('An unknown error occured', []); 
};

const addToPayload = (payload) => {
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

    if (res.status === 204) {
      return {}
    }

   return await res.json(); 
  } catch (err) {
    handleError(err);
  }
};

export const sendData = (url, data, token) => {
  if (Object.keys(data).length === 0) {
    throw new Error('Expecting data');
  }

  const payload = addToPayload(data)

  return callServer('POST', url, payload, token);
};

export const getData = (url, token) => {
  return callServer('GET', url, {}, token);
}

export const updateData = async (url, data, token) => {
  return await callServer('PUT', url, data, token);
};

export const deleteData = async (url, token) => {
  return await callServer('DELETE', url, {}, token);
};
