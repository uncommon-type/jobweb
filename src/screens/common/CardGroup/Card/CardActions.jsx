import { Button } from '@screens/common/Buttons/Button';

export const CardActions = ({ jobId, ...otherProps }) => (
  <div className='cluster'>
    <Button to={`${jobId}/role`} label='View' aria-label='View job' variant='secondary' />
    <Button label='Delete' aria-label='Delete job' variant='secondary'id={jobId} {...otherProps} />
  </div>
);
