import { CalendarDaysIcon as DateIcon } from '@heroicons/react/24/outline';

import { DateTimeInput } from './Inputs/DateTimeInput';

export const EditableDateTime = ({ edit, value, name, label }) => {
  return (
    <div className="sidebar">
      <DateIcon className={`${name}-icon`} />
      {!edit && <span className="item-center">{value}</span>}

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
