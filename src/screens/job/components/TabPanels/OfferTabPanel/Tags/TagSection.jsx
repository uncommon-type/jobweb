import { getErrorMessage } from '@helpers/form';

import { TagInput } from './TagInput';
import { TagList } from './TagList/TagList';

export const TagSection = ({ tags, title, fieldName, errors }) => {
  const tagCount = tags.filter(tag => tag.type === fieldName).length;
  const isDisabled = tagCount > 4;
  const errorText = getErrorMessage(errors, fieldName);

  return (
    <div>
      <h4 className='font-special'>{title}</h4>
      <p> Add up to 5</p>

      <div className='splitter'>
        <TagInput name={fieldName} disabled={isDisabled} errorText={errorText} />
        {tags?.length > 0
          ? (
              <TagList tags={tags} />
            )
          : null}
      </div>
    </div>
  );
};
