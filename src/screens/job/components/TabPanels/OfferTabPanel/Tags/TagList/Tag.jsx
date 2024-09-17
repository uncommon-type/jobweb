import { useOutletContext } from 'react-router-dom';

import { Button } from '@screens/common/Buttons/Button';

export const Tag = ({ tag }) => {
  const { fetcher, job } = useOutletContext();

  const handleDelete = async (e) => {
    e.preventDefault();
    fetcher.submit({ tagId: tag.id, tabName: 'offer', intent: 'DELETE' }, { method: 'DELETE', action: `/jobs/${job.id}/` });
  };

  return (
    <div className='tag-item'>
      <p className='tag-item__label'>{tag.title}</p>
      <Button className='cluster' icon='closeIcon' aria-label='Delete tag' name='intent' value='DELETE' onClick={handleDelete} />
    </div>
  );
};
