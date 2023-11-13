import { useLocation, Routes, Route } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Card } from '@screens/common/CardGroup/Card/Card';
import { JobTabs } from './JobTabs';
import { RoleInfo } from './RoleInfo';
import { CompanyInfo } from './CompanyInfo';
import { ActivityInfo } from './ActivityInfo';

export const JobContent = ({ from, job }) => {
  const location = useLocation();

  return (
    <>
      <Header>
        <SecondaryNav
          fromLink={from}
          showEdit={location.pathname.split('/').pop() !== 'activity'}
        />
      </Header>

      <main>
        <section className="job-details-group flow">
          <Card job={job} className="no-border" />
          <JobTabs />
          <form className="flow">
            <Routes>
              <Route path="role" element={<RoleInfo job={job} />} />
              <Route path="company" element={<CompanyInfo job={job} />} />
              <Route path="activity" element={<ActivityInfo job={job} />} />
            </Routes>
          </form>
        </section>
      </main>
    </>
  );
};
