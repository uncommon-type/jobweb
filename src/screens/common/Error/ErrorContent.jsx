import { isRouteErrorResponse } from 'react-router-dom';

export const ErrorContent = ({ error }) => {
  const hasError = isRouteErrorResponse(error);

  if (hasError && error.status === 401) {
    return <div>You aren't authorized to see this</div>;
  }

  if (hasError && error.status === 404) {
    return <div>Not found</div>;
  }

  if (hasError && error.status === 503) {
    return <div>Looks like our API is down</div>;
  }

  return <div>Something went wrong</div>;
};
