import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';

export const JobNotFound = ({ from }) => {
  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={from}
          showEdit={false}
        />
      </Header>
      <main>
        <p> Job not Found</p>
      </main>
    </>
  )
}
