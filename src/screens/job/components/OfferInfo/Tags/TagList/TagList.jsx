import { Tag } from './Tag';

export const TagList = ({ tags, jobId }) => (
  <div className='tag-group flow'>
    {tags.map(tag => <Tag key={tag.id} tag={tag} jobId={jobId} />)}
  </div>
);
