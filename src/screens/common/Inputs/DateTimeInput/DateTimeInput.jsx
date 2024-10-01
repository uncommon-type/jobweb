import { TimeInput } from '../TimeInput';
import { DateInput } from '../DateInput';
import { InlineError } from '../../Error/InlineError';
import { Legend } from './Legend';

export const DateTimeInput = ({ legend, value, legendlHidden, error, ...otherProps }) => {
  if (!value) {
    value = new Date();
  }
  else {
    value = new Date(value);
  }

  const timeString = `${String(value.getHours()).padStart(2, 0)}:${String(value.getMinutes()).padStart(2, 0)}`;

  const dateString = `${value?.getFullYear()}-${String(value.getMonth() + 1).padStart(2, 0)}-${String(value.getDate()).padStart(2, 0)}`;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError error={error} />
  );

  const legendMarkup = legend
    ? (
        <Legend
          {...otherProps}
          hidden={legendlHidden}
        >
          {legend}
        </Legend>
      )
    : null;

  return (
    <fieldset className='date-field'>
      {errorMarkup}
      {legendMarkup}
      <div className='cluster'>
        <TimeInput timeString={timeString} />
        <DateInput dateString={dateString} />
      </div>
    </fieldset>
  );
};
