import { isRouteErrorResponse } from 'react-router-dom';

export const ErrorContent = ({ error }) => {
  const hasError = isRouteErrorResponse(error);

  if (hasError && error.status === 401) {
    return <div>You aren&apos;t authorized to see this</div>;
  }

  if (hasError && error.status === 404) {
    return <div>{error.statusText}</div>;
  }

  if (hasError && error.status === 503) {
    return <div>Looks like our API is down</div>;
  }

  return <div>Something went wrong</div>;
};
