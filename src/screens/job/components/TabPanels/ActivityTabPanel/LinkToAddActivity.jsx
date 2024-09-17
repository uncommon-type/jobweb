import { Button } from '@screens/common/Buttons/Button';

export const LinkToAddActivity = ({ jobId }) => (
  <Button
    to={`/jobs/${jobId}/activity/events/new`}
    state={{ from: `/jobs/${jobId}/activity` }}
    variant='secondary'
    className='button button-lg'
    icon='arrow'
    label='Add task or event'
  />
);
