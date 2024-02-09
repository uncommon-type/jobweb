import { RadioButton } from './RadioButton';

export const RadioGroup = ({ options, label, name, className }) => {
  return (
    <fieldset className={className}>
      <legend className="font-special">{label}</legend>
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
};
