import { formatMoney, getErrorMessage } from '@helpers/form';
import { getDate } from '@helpers/datetime';

import { JobDetail } from '../JobDetail';
import { TagSection } from './Tags/TagSection';

export const ViewOfferInfo = ({ job, edit, errors }) => {
  const tagError = getErrorMessage(errors, 'title');

  return (
    <>
      <JobDetail title='Salary per year' content={job.salary ? formatMoney(job.salary) : 'n/a'} formatMoney={formatMoney} />
      <JobDetail title='Benefits' content={job.benefits} />
      <JobDetail title='Start date' content={getDate(job.startDate) || 'n/a'} />
      <JobDetail title='Probation' content={job.probation} />
      <TagSection jobId={job.id} tags={job.pros} edit={edit} tagError={tagError} title='Pros' />
      <TagSection jobId={job.id} tags={job.cons} edit={edit} tagError={tagError} title='Cons' />
    </>
  );
};
