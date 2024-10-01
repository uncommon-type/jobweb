import { Input } from './Input/Input';

export const TimeInput = ({ timeString }) => (
  <Input
    type='time'
    id='time'
    name='time'
    label='Start time'
    labelHidden
    value={timeString}
    className='width-6'
    pattern='[0-9]*'
  />
);
