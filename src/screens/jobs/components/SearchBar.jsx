export const SearchBar = () => (
  <form className='search-group'>
    <label htmlFor='search'>
      <span className='sr-only'>Search</span>
      <input id='search' type='search' />
    </label>
    <button type='submit' className='button' data-type='naked'>
      Search
    </button>
  </form>
);
