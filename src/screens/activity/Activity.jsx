import { useState } from 'react';
import { redirect, useLoaderData, useNavigation } from 'react-router-dom';

import { authenticate } from '@helpers/token';
import { getJob } from '@network/jobs';

import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Event } from './components/Event';
import { Task } from './components/Task';

export const loader = async ({ params }) => {
  const token = authenticate();

  if (!token) {
    return redirect('/');
  }

  const job = await getJob(params.jobId, token);

  const activity = job.activities.find(
    (activity) => activity.id === params.activityId,
  );

  return { job, activity };
};

export const Activity = () => {
  const [edit, setEdit] = useState(false);
  const { job, activity } = useLoaderData();
  const navigation = useNavigation();
  const isEvent = activity.type === 'event';

  return (
    <div className={navigation.state === 'loading' ? 'loading' : ''}>
      <Header>
        <SecondaryNav
          fromLink={`/jobs/${job.id}/activity`}
          title={isEvent ? 'Event details' : 'Task details'}
          showEdit={true}
          onEdit={() => setEdit(!edit)}
        />
      </Header>

      <main>
        <section className="activity-details-group flow">
          {isEvent ? (
            <Event activity={activity} edit={edit} />
          ) : (
            <Task activity={activity} edit={edit} />
          )}
        </section>
      </main>
    </div>
  );
};
