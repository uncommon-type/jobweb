import { TagInput } from './TagInput';
import { TagList } from './TagList/TagList';
import { FieldError } from '@screens/common/Error/FieldError';

export const TagSection = ({ jobId, tags, edit, tagError, title }) => (
  <div>
    <h4 className='font-special'>{title}</h4>
    <p> Add up to 5</p>
    {tagError && <FieldError error={tagError} />}
    <div className='splitter'>
      <TagInput edit={edit} jobId={jobId} />
      {tags?.length > 0
        ? (
            <TagList tags={tags} jobId={jobId} />
          )
        : null}
    </div>
  </div>
);
