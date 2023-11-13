import { jobData } from '@helpers/defaultData';

import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';
import { CardGroup } from '../common/CardGroup/CardGroup';

export const Jobs = () => {
  return (
    <>
      <Header>
        <div className="cluster">
          <Logo />
          <MainNav />
        </div>
      </Header>
      <main className="flow flow-space-xl">
        <section className="card-group flow">
          <CardGroup jobs={jobData} />
        </section>
      </main>
    </>
  );
};
