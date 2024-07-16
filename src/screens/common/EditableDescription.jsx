import { NewspaperIcon as InfoIcon } from '@heroicons/react/24/outline';

import { TextAreaInput } from './Inputs/TextAreaInput';

export const EditableDescription = ({ edit, label, value, name, showLabel }) => (
  <div className='sidebar'>
    <InfoIcon className={`${name}-icon`} />
    <TextAreaInput
      edit={edit}
      label={label}
      value={value}
      className='width-20'
      showCharacterCount={true}
      showLabel={showLabel}
      name={name}
    />
  </div>
);
