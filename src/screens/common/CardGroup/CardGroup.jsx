import { Card } from './Card/Card';

export const CardGroup = ({ jobs }) => {
  return (
    <section className="card-group flow">
      <h2>{`${Object.keys(jobs).length} jobs being viewed`}</h2>
      {Object.values(jobs).map((job) => (
        <Card key={job.id} job={job} showButtons={true} />
      ))}
    </section>
  );
};
