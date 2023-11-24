import { useRouteError } from 'react-router-dom';

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
