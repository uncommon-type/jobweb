import { useRouteError } from 'react-router-dom';

import { Header } from '../Header/Header';
import { SecondaryNav } from '../Header/SecondaryNav';
import { ErrorContent } from './ErrorContent';

export const Error = () => {
  const error = useRouteError();

  return (
    <div className='wrapper decor'>
      <span className='pin'></span>
      <Header>
        <SecondaryNav
          fromLink='/jobs'
          showEdit={false}
        />
      </Header>
      <main>
        <ErrorContent error={error} />
      </main>
    </div>
  );
};
