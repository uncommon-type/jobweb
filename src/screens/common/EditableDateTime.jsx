import { CalendarDaysIcon as DateIcon } from '@heroicons/react/24/outline';

import { getDate, getTime } from '@helpers/datetime';

import { DateTimeInput } from './Inputs/DateTimeInput';

export const EditableDateTime = ({ edit, value, name, label, error }) => {
  const date = new Date(value);
  return (
    <div className='option'>
      <DateIcon className={`${name}-icon`} />
      {!edit && <span className='item-center'>{ date ? `${getDate(date)} ${getTime(date)}` : new Date()}</span>}
      {edit && (
        <DateTimeInput
          name={name}
          legend={label}
          value={value}
          error={error}
        />
      )}
    </div>
  );
};
