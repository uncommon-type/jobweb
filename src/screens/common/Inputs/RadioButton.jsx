import { useId } from 'react';

export const RadioButton = ({ name, option }) => {
  const id = useId();

  return (
    <div className='radiobox'>
      <input type='radio' id={`option-${id}`} name={name} value={option} />
      <label htmlFor={`option-${id}`}>{option}</label>
    </div>
  );
};
