import { useParams } from 'react-router-dom';

import { getJob } from '@network/jobs';
import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewEvent } from './components/NewEvent';
import { NewTask } from './components/NewTask';

export const AddActivity = ({ isEvent = false }) => {
  const { jobId } = useParams();

  const job = getJob(jobId);

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${jobId}/activity`} />
      </Header>
      <main>
        <section className="add-activity-group flow">
          <NewActivityTabs jobId={job.id} />
          {isEvent ? <NewEvent /> : <NewTask />}
        </section>
      </main>
    </>
  );
};
