import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

import { Input } from './Inputs/Input';

export const EditableCheckbox = ({
  edit,
  label,
  name,
  id,
  value,
  link,
  showLabel,
  checked = false,
  onChange,
  className = ''
}) => {
  const [checkedState, setCheckedState] = useState(checked);
  const generatedId = useId();
  const appliedId = id || generatedId;

  const handleChange = (e) => {
    if (!edit) {
      onChange(e)
    }
    setCheckedState(e.target.checked);
  }

  return (
    <div className={`option ${className}`}>
      <input type="checkbox" id={appliedId} name={name} onChange={handleChange} checked={checkedState} />
      <label htmlFor={appliedId} className={!edit ? '' : 'sr-only'} >
        {!edit && (
          link ? (
            <Link to={link} aria-label="View details">
              {value}
            </Link>
          ) : (
            value
          )
        )}
        {edit && `${name} status`}
      </label >
      {edit && (
        <Input
          edit={true}
          showLabel={showLabel}
          label={label}
          value={value}
          name={`${name}Input`}
        />
      )}
    </div >
  );
};
