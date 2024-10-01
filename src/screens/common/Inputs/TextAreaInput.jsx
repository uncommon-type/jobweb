import { useId } from 'react';

import { useCharacterCountdown } from '@hooks/useCharacterCountdown';
import { Labelled } from './Label/Labelled';
import { InlineError } from '../Error/InlineError';

export const TextAreaInput = ({ id, name, label, labelHidden, value, className = '', rows = 9, maxLength, error, edit = true }) => {
  const { input, setInput, message } = useCharacterCountdown(maxLength, value);
  const generatedId = useId();
  const appliedId = id || generatedId;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError error={error} />
  );

  const messageMarkup = (
    maxLength && (
      <span role='status' aria-live='polite'>
        {message}
      </span>
    )
  );

  const editMarkup = (
    <Labelled
      id={appliedId}
      label={label}
      labelHidden={labelHidden}
    >
      {error && errorMarkup}
      <textarea
        id={appliedId}
        name={name}
        defaultValue={input}
        rows={rows}
        className={className}
        maxLength={maxLength}
        onChange={e => setInput(e.target.value)}
      >
      </textarea>
      {messageMarkup}
    </Labelled>
  );

  const viewMarkup = (
    <span className='item-center'>{value}</span>
  );

  return (
    edit
      ? editMarkup
      : viewMarkup
  );
};
