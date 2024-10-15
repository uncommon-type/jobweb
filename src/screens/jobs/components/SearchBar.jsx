import { useLoaderData, useFetcher } from 'react-router-dom';

import { Input } from '@screens/common/Inputs/Input/Input';
import { getErrorMessage } from '@helpers/form';

export const searchLoader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  return { q };
};

export const SearchBar = () => {
  const { q } = useLoaderData();
  const fetcher = useFetcher({ key: 'search-fetcher' });
  const errors = fetcher?.data?.length ? fetcher.data : null;
  const searchError = getErrorMessage(errors, 'q');

  return (
    <fetcher.Form id='search-form' role='search' action='/jobs/search'>
      <Input
        type='search'
        id='q'
        name='q'
        label='Search'
        labelHidden
        aria-label='Search'
        defaultValue={q}
        onChange={(e) => { fetcher.submit(e.currentTarget.form); }}
      />
    </fetcher.Form>
  );
};
