import { useId } from 'react';

export const Input = ({ label, value, name, id, showLabel }) => {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <div className="form-item">
      <label htmlFor={`${name}-${appliedId}`} className="font-special">
        {showLabel ? (
          label
        ) : (
          <span className="sr-only">{`Edit ${name} name`}</span>
        )}
      </label>
      <input
        type="text"
        id={`${name}-${appliedId}`}
        name={name}
        defaultValue={value}
        className="width-20"
      />
    </div>
  );
};
