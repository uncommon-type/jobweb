import { CardActions } from './CardActions';

export const Card = ({ className = '', job, showButtons, ...otherProps }) => {
  const { company, status, jobTitle, date, id } = job;
  const appliedClass = `card sidebar ${className}`;

  return (
    <article className={appliedClass}>
      <div className='box' />
      <div className='card__content flow'>
        <div>
          <p>{company?.name}</p>
          <p className='text-500'>{jobTitle}</p>
          <div>
            <span className='meta-item'>{status}</span>
            <span className='meta-item'>{date}</span>
          </div>
        </div>
        {showButtons ? <CardActions jobId={id} {...otherProps} /> : null}
      </div>
    </article>
  );
};
