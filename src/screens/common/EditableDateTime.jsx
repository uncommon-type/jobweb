import { CalendarDaysIcon as DateIcon } from '@heroicons/react/24/outline';

import { getDate, getTime } from '@helpers/datetime';

import { DateTimeInput } from './Inputs/DateTimeInput';

export const EditableDateTime = ({ edit, value, name, label }) => {
  const date = new Date(value);
  return (
    <div className='sidebar'>
      <DateIcon className={`${name}-icon`} />
      {!edit && <span className='item-center'>{`${getDate(date)} ${getTime(date)}`}</span>}
      {edit && (
        <DateTimeInput
          showLabel={true}
          label={label}
          value={value}
          name={name}
        />
      )}
    </div>
  );
};
