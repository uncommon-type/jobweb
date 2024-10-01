import { NewspaperIcon as InfoIcon } from '@heroicons/react/24/outline';

import { TextAreaInput } from './Inputs/TextAreaInput';

export const EditableDescription = ({ edit, label, value, name, labelHidden, maxLength, error }) => (
  <div className='option'>
    <InfoIcon className={`${name}-icon`} />
    <TextAreaInput
      name={name}
      label={label}
      labelHidden={labelHidden}
      value={value}
      className='width-20'
      error={error}
      maxLength={maxLength}
      edit={edit}
    />
  </div>
);
