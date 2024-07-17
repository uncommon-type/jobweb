import { useLocation } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';
import { links } from '@helpers/constants';

export const NotFound = () => {
  const location = useLocation();
  const from = location.state?.from || `${links.login}`;

  return (
    <main className='flow'>
      <h1>404</h1>
      <div className='flow'>
        <p>We&apos;re sorry but the page you&apos;re looking for can&apos;t be found.</p>
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
