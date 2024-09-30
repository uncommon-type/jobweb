import { useRef, useId } from 'react';

import { Choice } from './Choice';

export const Checkbox = ({ id, label, labelClassName = '', labelHidden, name, checked = false, onChange, edit, link, children, ...otherProps }) => {
  const inputNode = useRef(null);
  const generatedId = useId();
  const appliedId = id || generatedId;

  const wrapperClassName = 'option';

  const extraChoiceProps = { link };

  return (
    <div className={wrapperClassName}>
      <input
        type='checkbox'
        ref={inputNode}
        id={appliedId}
        name={name}
        checked={checked}
        onChange={onChange}
        {...otherProps}
      />
      <Choice
        id={appliedId}
        label={label}
        labelHidden={labelHidden}
        labelClassName={labelClassName}
        edit={edit}
        {...extraChoiceProps}
      />
      {children}
    </div>
  );
};
