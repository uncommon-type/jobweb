import { CardActions } from './CardActions';

export const Card = ({ className = '', job, showButtons }) => {
  const { company, status, jobTitle, date } = job;
  const appliedClass = `card sidebar ${className}`;

  return (
    <article className={appliedClass}>
      <div className="box3 testt" />
      <div className="card__content flow">
        <div>
          <p>{company.name}</p>
          <p className="text-500">{jobTitle}</p>
          <div>
            <span className="meta-item">{status}</span>
            <span className="meta-item">{date}</span>
          </div>
        </div>

        {showButtons ? <CardActions job={job} /> : null}
      </div>
    </article>
  );
};

