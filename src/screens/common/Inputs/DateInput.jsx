import { Input } from './Input/Input';

export const DateInput = ({ dateString }) => (
  <Input
    type='date'
    id='date'
    name='date'
    label='Date'
    labelHidden
    value={dateString}
    className='width-8'
    pattern='[0-9]*'
  />
);
