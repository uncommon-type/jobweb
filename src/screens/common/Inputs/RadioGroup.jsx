import { useState } from 'react';

import { RadioButton } from './RadioButton';
import { InlineError } from '../Error/InlineError';

export const RadioGroup = ({ options, label, name, className, error, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <fieldset className={className}>
      {error && <InlineError error={error} />}
      <legend className='font-special'>{label}</legend>
      {options.map((option, index) => {
        const optionId = `option-${index + 1}`;
        return (
          <RadioButton key={optionId} id={optionId} name={name} option={option} selectedOption={selectedOption} onChange={handleChange} />
        );
      })}
    </fieldset>
  );
};
