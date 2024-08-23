import { TimeInput } from './TimeInput';
import { DateInput } from './DateInput';
import { FieldError } from '../Error/FieldError';

export const DateTimeInput = ({ label, value, name, showLabel, error }) => {
  if (!value) {
    value = new Date();
  }
  else {
    value = new Date(value);
  }

  const timeString = `${String(value.getHours()).padStart(2, 0)}:${String(value.getMinutes()).padStart(2, 0)}`;

  const dateString = `${value?.getFullYear()}-${String(value.getMonth() + 1).padStart(2, 0)}-${String(value.getDate()).padStart(2, 0)}`;

  return (
    <fieldset className={`${name}-field`}>
      {error && <FieldError error={error} />}
      {showLabel
        ? (
            <legend className='font-special'>
              <span>{label}</span>
            </legend>
          )
        : null}
      <div className='cluster'>
        <TimeInput timeString={timeString} />
        <DateInput dateString={dateString} />
      </div>
    </fieldset>
  );
};
