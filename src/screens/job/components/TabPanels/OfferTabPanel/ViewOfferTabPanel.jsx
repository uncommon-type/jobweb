import { useOutletContext, useFetcher } from 'react-router-dom';

import { formatMoney } from '@helpers/form';
import { getDate } from '@helpers/datetime';

import { TagSection } from './Tags/TagSection';
import { JobDetail } from '../JobDetail';

export const ViewOfferTabPanel = () => {
  const { job } = useOutletContext();
  const { tags, salary, benefits, startDate, probation } = job;
  const fetcher = useFetcher({ key: 'add-tag-fetcher' });
  const errors = fetcher?.data?.length ? fetcher.data : null;
  const proErrors = errors?.filter(error => error.name === 'pro');
  const conErrors = errors?.filter(error => error.name === 'con');
  const cons = tags.filter(tag => tag.type === 'con');
  const pros = tags.filter(tag => tag.type === 'pro');

  return (
    <>
      <JobDetail title='Salary per year' content={salary ? formatMoney(salary) : 'n/a'} />
      <JobDetail title='Benefits' content={benefits || 'n/a'} />
      <JobDetail title='Start date' content={startDate ? getDate(startDate) : 'n/a'} />
      <JobDetail title='Probation' content={probation || 'n/a'} />
      <TagSection tags={pros} title='Pros' fieldName='pro' errors={proErrors} />
      <TagSection tags={cons} title='Cons' fieldName='con' errors={conErrors} />
    </>
  );
};
