import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';
import { CardGroup } from '../common/CardGroup/CardGroup';

export const jobData = {
  'job:99ee3214-05db-4c91-a237-a443205739b3': {
    id: '99ee3214-05db-4c91-a237-a443205739b3',
    status: 'Offer received',
    date: '3 days ago',
    jobTitle: 'Search Engineer',
    employmentType: 'Full-time',
    location: 'Remote',
    company: {
      id: '4e9cdb7f-1fe3-47e5-960c-58c79482cb22',
      name: 'Brave',
    },
  },
};

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
