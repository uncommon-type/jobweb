import React from 'react';
import { RouterProvider} from 'react-router-dom';

import { router } from "./routes";
import { Root } from './Root';

export const App = () => (
    <div className='k'>
      <RouterProvider router={router} fallbackElement={<Root />} />
    </div>
)
