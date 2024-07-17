import { PlusIcon } from '@heroicons/react/24/outline';

export const AddItemForm = () => (
  <div className='add-pro-form-group sidebar'>
    <label htmlFor='add-box'>
      <span className='sr-only'>Add a pro</span>
      <input type='text' id='add-box' />
    </label>

    <button
      type='submit'
      className='button'
      data-type='naked'
      aria-label='Add item'
    >
      <PlusIcon />
    </button>
  </div>
);
