import { useLocation } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';

export const AddJob = () => {
  const location = useLocation();
  const from = location.state?.from || '/jobs';

  return (
    <>
      <Header>
        <SecondaryNav fromLink={from} />
      </Header>
      <main>Add Job View</main>
    </>
  );
};
