import { Button } from '@screens/common/Buttons/Button';

export const SearchBar = () => (
  <form className='search-group'>
    <label htmlFor='search'>
      <span className='sr-only'>Search</span>
      <input id='search' type='search' />
    </label>
    <Button label='Search' aria-label='Search' variant='naked' type='submit' />
  </form>
);
