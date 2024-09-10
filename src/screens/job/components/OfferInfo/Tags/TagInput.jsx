import { Button } from '@screens/common/Buttons/Button';

export const TagInput = ({ edit }) => {
  return (
    <div className='tag-form width-10'>
      <label htmlFor='title'>
        <span className='sr-only'>Add a tag</span>
        <input
          type='text'
          id='title'
          name='title'
          aria-label='Add a tag'
        />
      </label>
      {!edit && <Button variant='naked' icon='plusIcon' aria-label='Add tag' type='submit' name='intent' value='ADD' />}
    </div>
  );
};
