import { useId } from 'react';
import { useCharacterCountdown } from '@hooks/useCharacterCountdown';

export const TextAreaInput = ({
  edit,
  label,
  value,
  name,
  id,
  className,
  showLabel,
  rows = 9,
  showCharacterCount,
}) => {
  const maxLength = 250;
  const { input, setInput, message } = useCharacterCountdown(maxLength, value);
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <>
      {!edit && <span className='item-center'>{value}</span>}
      {edit && (
        <div className='form-item'>
          <label htmlFor={`${name}-${appliedId}`}>
            {showLabel
              ? (
                  <span className='font-special'>{label}</span>
                )
              : (
                  <span className='sr-only'>{label}</span>
                )}
          </label>
          <textarea
            id={`${name}-${appliedId}`}
            name={name}
            rows={rows}
            className={className}
            defaultValue={input}
            onChange={e => setInput(e.target.value)}
            message={message}
            maxLength={maxLength}
          >
          </textarea>
          {showCharacterCount && (
            <span role='status' aria-live='polite'>
              {message}
            </span>
          )}
        </div>
      )}
    </>
  );
};
