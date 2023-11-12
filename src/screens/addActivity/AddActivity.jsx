import { useParams } from 'react-router-dom';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewEvent } from './components/NewEvent';
import { NewTask } from './components/NewTask';

export const AddActivity = ({ isEvent = false }) => {
  const { jobId } = useParams();

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${jobId}/activity`} />
      </Header>
      <main>
        <section className="add-activity-group flow">
          <NewActivityTabs />
          {isEvent ? <NewEvent /> : <NewTask />}
        </section>
      </main>
    </>
  );
};
