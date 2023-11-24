import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="wrapper decor">
      <span className="pin"></span>
      <Outlet />
    </div>
  );
};
