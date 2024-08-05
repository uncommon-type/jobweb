import { NewspaperIcon as InfoIcon } from '@heroicons/react/24/outline';

import { TextAreaInput } from './Inputs/TextAreaInput';

export const EditableDescription = ({ edit, label, value, name, showLabel, maxLength, error }) => (
  <div className='sidebar'>
    <InfoIcon className={`${name}-icon`} />
    <TextAreaInput
      edit={edit}
      label={label}
      value={value}
      className='width-20'
      showLabel={showLabel}
      name={name}
      maxLength={maxLength}
      error={error}
    />
  </div>
);
