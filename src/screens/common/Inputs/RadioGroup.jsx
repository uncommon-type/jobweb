import { RadioButton } from './RadioButton';
import { FieldError } from '../Error/FieldError';

export const RadioGroup = ({ options, label, name, className, error }) => (
  <fieldset className={className}>
    {error && <FieldError error={error} />}
    <legend className='font-special'>{label}</legend>
    {options.map((option, index) => {
      const optionId = `option-${index + 1}`;
      return (
        <RadioButton
          key={optionId}
          name={name}
          option={option}
        />
      );
    })}
  </fieldset>
);
