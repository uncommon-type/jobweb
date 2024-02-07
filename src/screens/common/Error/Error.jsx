import { useRouteError } from 'react-router-dom';

import { ErrorContent } from './ErrorContent';

export const Error = () => {
  const error = useRouteError();

  return (
    <div className="wrapper decor">
      <span className="pin"></span>
      <Header>
        <SecondaryNav
          fromLink="/jobs"
          showEdit={false}
        />
      </Header>
      <main>
        <ErrorContent error={error} />
      </main>
    </div>
  );
};
