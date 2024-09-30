import { useLocation, useRouteError } from 'react-router-dom';

import { links } from '@helpers/constants';

import { Button } from '../Buttons/Button';

export const PageError = () => {
  const error = useRouteError();
  const location = useLocation();
  const from = location.state?.from || links.login;

  return (
    <main className='flow'>
      <h1>{error.status}</h1>
      <div className='flow'>
        <p>{error.statusText}</p>
        <Button
          to={from}
          className='with-icon'
          icon='arrow'
          label='Go back'
          aria-label='Go back'
        />
      </div>
    </main>
  );
};
