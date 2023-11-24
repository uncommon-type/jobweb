import { useState } from 'react';
import { useParams, useNavigation } from 'react-router-dom';

import { getJob } from '@network/jobs';
import { Header } from '@screens/common/Header/Header';
import { SecondaryNav } from '@screens/common/Header/SecondaryNav';
import { Event } from './components/Event';
import { Task } from './components/Task';

export const Activity = () => {
  const [edit, setEdit] = useState(false);
  const navigation = useNavigation();
  const { jobId, activityId } = useParams();

  const job = getJob(jobId);

  const activity = job.activities.find(
    (activity) => activity.id === activityId,
  );

  const isEvent = activity.type === 'event';

  return (
    <div className={navigation.state === 'loading' ? 'loading' : ''}>
      <Header>
        <SecondaryNav
          fromLink={`/jobs/${jobId}/activity`}
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
