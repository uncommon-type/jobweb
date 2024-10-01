import { useEffect } from 'react';
import { useLocation, Outlet, useOutletContext, useFetcher } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Card } from '@screens/common/CardGroup/Card/Card';
import { TabList } from './TabList/TabList';
import { Button } from '@screens/common/Buttons/Button';

export const JobItem = () => {
  const { job, edit, setEdit, handleCancel, from } = useOutletContext();
  const location = useLocation();
  const isNotActivityPath = location.pathname.split('/').pop() !== 'activity';

  const fetcher = useFetcher();
  const errors = fetcher?.data?.length ? fetcher.data : null;

  useEffect(() => {
    if (fetcher.data && !errors) {
      setEdit(false);
    }
  }, [fetcher.data, errors]);

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={from}
          onEdit={() => setEdit(!edit)}
          showEdit={isNotActivityPath}
        />
      </Header>
      <main>
        <section className='job-details-group flow'>
          <Card job={job} className='no-border' />
          <TabList onChange={handleCancel} jobStatus={job?.status} />
          {isNotActivityPath
            ? (
                <fetcher.Form method='put' className='flow'>
                  <Outlet context={{ job, edit, setEdit, from, errors, fetcher, handleCancel }} />
                  {edit
                  && (
                    <div className='cluster'>
                      <Button label='Save' aria-label='Save job' variant='primary' />
                      <Button label='Cancel' aria-label='Cancel editing' variant='primary' onClick={handleCancel} type='button' />
                    </div>
                  )}
                </fetcher.Form>
              )
            : <Outlet context={{ job, edit, setEdit, from, errors, handleCancel }} />}
        </section>
      </main>
    </>
  );
};
