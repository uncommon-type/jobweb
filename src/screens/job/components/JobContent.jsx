import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Card } from '@screens/common/CardGroup/Card/Card';
import { JobTabs } from './JobTabs';

export const JobContent = ({ from, job }) => {
  const [edit, setEdit] = useState(false);
  const location = useLocation();

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={from}
          onEdit={handleEdit}
          showEdit={location.pathname.split('/').pop() !== 'activity'}
        />
      </Header>

      <main>
        <section className="job-details-group flow">
          <Card job={job} className="no-border" />
          <JobTabs onChange={() => setEdit(false)} jobStatus={job.status} />
          <Outlet context={{ job, edit }} />
        </section>
      </main>
    </>
  );
};
