import { useId } from 'react';
import { Link } from 'react-router-dom';

import { Input } from './Inputs/Input';

export const EditableCheckbox = ({ edit, label, name, id, value, link, showLabel, checked = false, onChange, className = '', error = '' }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className={`option ${className}`}>
      <input type='checkbox' id={appliedId} name={`${name}Status`} checked={checked} onChange={onChange} />
      <label htmlFor={appliedId} className={!edit ? '' : 'sr-only'}>
        {!edit && (
          link
            ? (
                <Link to={link} aria-label='View details'>
                  {value}
                </Link>
              )
            : (
                value
              )
        )}
        {edit && `${name} status`}
      </label>
      {edit && (
        <Input
          edit={true}
          showLabel={showLabel}
          label={label}
          value={value}
          name={`${name}Title`}
          error={error}
          onChange={onChange}
        />
      )}
    </div>
  );
};
