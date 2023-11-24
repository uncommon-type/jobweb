import { RouterProvider } from 'react-router-dom';

import { router } from './main';
import { Spinner } from '@screens/common/Spinner';

export const App = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <>
          <div className="wrapper decor">
            <span className="pin"></span>
            <div className="cluster fallback-element">
              <Spinner />
            </div>
          </div>
        </>
      }
    />
  );
};
