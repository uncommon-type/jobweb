export const RadioButton = ({ id, name, option, selectedOption, onChange }) => (
  <div className='radiobox'>
    <input
      type='radio'
      id={id}
      name={name}
      value={option}
      checked={option === selectedOption}
      onChange={onChange}
    />
    <label htmlFor={id}>{option}</label>
  </div>
);
