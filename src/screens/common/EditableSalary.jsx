import { Input } from './Inputs/Input/Input';

export const EditableSalary = ({ name, label, value, error, className }) => (
  <Input
    name={name}
    label={label}
    value={value}
    className={className}
    error={error}
    pattern='[0-9]+'
    minLength='1'
    maxLength='10'
    prefix='£'
    suffix='per year'
    helpText='For example, 50000'
  />
);
