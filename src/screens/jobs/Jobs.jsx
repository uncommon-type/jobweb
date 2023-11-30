import { useLoaderData, useNavigation } from 'react-router-dom';

import { getJobs } from '@network/jobs';
import { authenticate } from '@helpers/token';

import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';
import { CardGroup } from '../common/CardGroup/CardGroup';

export const loader = async () => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const jobList = await getJobs(token);

  const jobs = jobList ?? {};
  return { jobs };
};

export const Jobs = () => {
  const { jobs: jobList } = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className={navigation.state === 'loading' ? 'loading' : ''}>
      <Header>
        <div className="cluster">
          <Logo />
          <MainNav />
        </div>
      </Header>
      <main className="flow flow-space-xl">
        <section className="card-group flow">
          {Object.keys(jobList).length !== 0 ? (
            <CardGroup jobs={jobList} />
          ) : (
            <p>No actively tracked jobs </p>
          )}
        </section>
      </main>
    </div>
  );
};
