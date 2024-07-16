import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { Root } from './Root';

export const App = () => (
  <div className='app__inner'>
    <RouterProvider router={router} fallbackElement={<Root />} />
  </div>
);
