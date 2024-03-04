import { useLoaderData } from 'react-router-dom';

import { getJobs } from '@network/jobs';
import { authenticate } from '@helpers/token';

import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';
import { FilterGroup } from './components/FilterGroup/FilterGroup';
import { SearchBar } from './components/SearchBar';
import { CardGroup } from '../common/CardGroup/CardGroup';

export const loader = async () => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    return await getJobs(token);
  } catch (err) {
    if (err.status !== 404) {
      throw new Response('', {
        status: err.status || 500,
        statusText: 'Something went wrong',
      });
    }

    return err.errors;
  }
};


export const Jobs = () => {
  const jobList = useLoaderData();

  return (
    <>
      <Header>
        <div className="cluster">
          <Logo />
          <MainNav />
        </div>
      </Header>
      <main className="flow flow-space-xl">
        <FilterGroup jobs={jobList} />
        <SearchBar />
        <section className="card-group flow">
          {jobList ?
            <CardGroup jobs={jobList} />
            : <p>No actively tracked jobs </p>
          }
        </section>
      </main>
    </>
  );
};
