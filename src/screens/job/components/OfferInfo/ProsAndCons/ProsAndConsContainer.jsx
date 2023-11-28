import { ProsAndCons } from './ProsAndCons';

export const ProsAndConsContainer = ({ job }) => {
  return (
    <>
      <ProsAndCons label="Pros" items={job.pros} />
      <ProsAndCons label="Cons" items={job.cons} />
    </>
  );
};
