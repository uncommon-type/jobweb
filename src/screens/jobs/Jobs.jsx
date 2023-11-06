import { Header } from '@screens/common/Header';
import { MainNav } from '@screens/common/MainNav';

export const Jobs = () => {
  return (
    <>
      <Header>
        <div className="cluster">
          <MainNav />
        </div>
      </Header>
      <h1>Jobs View</h1>
    </>
  );
};
