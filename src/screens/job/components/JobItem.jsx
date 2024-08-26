import { useEffect } from 'react';
import { useLocation, Outlet, useOutletContext, useFetcher } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Card } from '@screens/common/CardGroup/Card/Card';
import { JobTabs } from './JobTabs';

export const JobItem = () => {
  const { from, job, edit, setEdit } = useOutletContext();
  const fetcher = useFetcher();
  const location = useLocation();
  const errors = fetcher?.data?.length ? fetcher.data : null;
  const isNotActivityPath = location.pathname.split('/').pop() !== 'activity';

  useEffect(() => {
    if (fetcher.data && !errors) {
      setEdit(false);
    }
  }, [fetcher.data, errors]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={from}
          onEdit={handleEdit}
          showEdit={isNotActivityPath}
        />
      </Header>
      <main>
        <section className='job-details-group flow'>
          <Card job={job} className='no-border' />
          <JobTabs onChange={() => setEdit(false)} jobStatus={job?.status} />
          {isNotActivityPath
            ? (
                <fetcher.Form method='put' className='flow'>
                  <Outlet context={{ job, edit, setEdit, from, errors }} />
                </fetcher.Form>
              )
            : <Outlet context={{ job, edit, setEdit, from, errors }} />}
        </section>
      </main>
    </>
  );
};
