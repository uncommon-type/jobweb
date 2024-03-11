import { useId } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

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
  onChange
}) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className={edit ? 'option items-end' : 'option'}>
      <input type="checkbox" id={appliedId} name={name} onChange={onChange} checked={checked} />
      <label htmlFor={appliedId} className={!edit ? 'option-meta' : 'sr-only'} >
        {!edit && (
          link ? (
            <>
              <Link to={link} aria-label="View details">
                {value}
              </Link>
              <span>
                <TrashIcon className="delete-icon" />
              </span>
            </>
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
