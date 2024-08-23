import { ExclamationTriangleIcon as AlertIcon } from '@heroicons/react/24/outline';

export const Alert = ({ message, className = '' }) => (
  <figure className={`alert cluster ${className}`}>
    <AlertIcon />
    <p>{message}</p>
  </figure>
);
