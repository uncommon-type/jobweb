import { Outlet } from 'react-router-dom';

export const Root = () => (
    <div className='wrapper decor'>
      <span className='pin'></span>
      <Outlet />
    </div>
);
