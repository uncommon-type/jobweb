import { useLocation } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewJob } from './components/NewJob';

export const AddJob = () => {
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  return (
    <>
      <Header>
        <SecondaryNav fromLink={from} />
      </Header>
      <main><NewJob /></main>
    </>
  );
};
