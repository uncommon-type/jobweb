export const TimeInput = ({ timeString }) => (
  <div>
    <label htmlFor='time'>
      <span className='sr-only'>Start time</span>
    </label>
    <input
      type='time'
      id='time'
      name='time'
      className='width-6'
      defaultValue={timeString}
      pattern='[0-9]*'
    />
  </div>
);
