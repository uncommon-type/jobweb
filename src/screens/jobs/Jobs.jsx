import { useLoaderData, redirect, useFetcher } from 'react-router-dom';

import { getJobs, deleteJob } from '@network/jobs';
import { authenticate } from '@helpers/token';

import { Header } from '@screens/common/Header/Header';
import { Logo } from '@screens/common/Header/Logo';
import { MainNav } from '@screens/common/Header/MainNav';
import { FilterGroup } from './components/FilterGroup/FilterGroup';
import { SearchBar } from './components/SearchBar';
import { CardGroup } from '@screens/common/CardGroup/CardGroup';

export const loader = async () => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  try {
    return await getJobs(token);
  }
  catch (err) {
    throw new Response('', {
      status: err.status || 500,
      statusText: 'Something went wrong',
    });
  }
};

export const action = async ({ request }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const formData = await request.formData();
  const { id } = Object.fromEntries(formData);

  try {
    return await deleteJob(id, token);
  }
  catch (err) {
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const Jobs = () => {
  const jobs = useLoaderData();
  const fetcher = useFetcher();

  const handleFilterSelection = () => {
    console.log('handleFilterSelection');
  };

  const handleDelete = (e) => {
    fetcher.submit({ id: e.currentTarget.id }, { method: 'DELETE' });
  };

  return (
    <>
      <Header>
        <div className='cluster'>
          <Logo />
          <MainNav />
        </div>
      </Header>
      <main className='flow flow-space-xl'>
        <FilterGroup
          jobs={jobs || {}}
          onFilterSelection={handleFilterSelection}
        />
        <SearchBar />
        {jobs
          ? <CardGroup jobs={jobs} onDelete={handleDelete} />
          : <p>No actively tracked jobs </p>}
      </main>
    </>
  );
};
