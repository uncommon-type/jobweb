export const DateInput = ({ dateString }) => (
  <div>
    <label htmlFor='date' className='font-special'>
      <span className='sr-only'>Date</span>
    </label>
    <input
      type='date'
      id='date'
      name='date'
      className='width-8'
      defaultValue={dateString}
      onChange={() => console.log('**')}
      pattern='[0-9]*'
    />
  </div>
);
