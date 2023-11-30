import { useLoaderData, redirect } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { NewActivityTabs } from './components/NewActivityTabs';
import { NewEvent } from './components/NewEvent';
import { NewTask } from './components/NewTask';

export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }
  const job = await getJob(params.jobId, token);
  return { job };
};

export const AddActivity = ({ isEvent = false }) => {
  const { job } = useLoaderData();

  return (
    <>
      <Header>
        <SecondaryNav fromLink={`/jobs/${job.id}/activity`} />
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

