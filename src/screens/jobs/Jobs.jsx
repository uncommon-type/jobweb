import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';

export const Jobs = () => {
  return (
    <>
      <Header>
        <div className="cluster">
          <Logo />
          <MainNav />
        </div>
      </Header>
      <h1>Jobs View</h1>
    </>
  );
};
