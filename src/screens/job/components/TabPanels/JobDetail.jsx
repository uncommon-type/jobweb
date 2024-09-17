export const JobDetail = ({ title, content }) => (
  <div>
    <h4 className='font-special'>{title}</h4>
    <p>{content || 'n/a'}</p>
  </div>
);
