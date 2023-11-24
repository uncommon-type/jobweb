import { useRouteError } from 'react-router-dom';

import { ErrorContent } from './ErrorContent';

export const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div className="wrapper decor">
        <span className="pin"></span>
        <ErrorContent error={error} />
      </div>
    </>
  );
};
