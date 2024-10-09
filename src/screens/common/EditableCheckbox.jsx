import { Input } from './Inputs/Input/Input';
import { Checkbox } from './Inputs/Checkbox/Checkbox';

export const EditableCheckbox = ({ id, label, labelClassName = '', labelHidden, textFieldName, textFieldValue, name, checked = false, edit = false,
  className, error, onChange, ...otherProps }) => (
  <Checkbox
    id={id}
    name={name}
    label={label}
    labelHidden={labelHidden === undefined ? true : labelHidden}
    labelClassName={labelClassName}
    checked={checked}
    edit={edit}
    className={className}
    onChange={onChange}
    {...otherProps}
  >
    {edit
    && (
      <Input
        name={textFieldName}
        label={label}
        labelHidden={labelHidden}
        value={textFieldValue}
        error={error}
        className='width-20'
        edit='true'
      />
    )}
  </Checkbox>
);
