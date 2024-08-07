import { ExclamationTriangleIcon as AlertIcon } from '@heroicons/react/24/outline';

export const Alert = ({ message }) => (
  <figure className='alert cluster'>
    <AlertIcon />
    <p>{message}</p>
  </figure>
);
