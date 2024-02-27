import { Link } from 'react-router-dom';
import { useId } from 'react';

import { Input } from './Inputs/Input';

export const EditableCheckbox = ({
  edit,
  label,
  name,
  id,
  value,
  link,
  showLabel,
}) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className="cluster with-checkbox-btn">
      <div className="checkbox">
        <input type="checkbox" id={`${name}-${appliedId}`} name={`${name}Checkbox`} />
        <label htmlFor={`${name}-${appliedId}`}>
          {!edit && (
            <>
              {link ? (
                <Link to={link} aria-label="View details">
                  {value}
                </Link>
              ) : (
                value
              )}
            </>
          )}
          {edit && <span className="sr-only">{`${name} status`}</span>}
        </label>
      </div>

      {edit && (
        <Input
          edit={true}
          showLabel={showLabel}
          label={label}
          value={value}
          name={`${name}Input`}
        />
      )}
    </div>
  );
};
