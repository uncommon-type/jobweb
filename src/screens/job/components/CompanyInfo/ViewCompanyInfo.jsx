export const ViewCompanyInfo = ({ job }) => (
  <div className='flow'>
    <div>
      <h4 className='font-special'>Description</h4>
      <p>{job.company.description || 'n/a'}</p>
    </div>

    <div>
      <h4 className='font-special'>Benefits</h4>
      {job.benefits || 'n/a'}
    </div>
    <div>
      <h4 className='font-special'>Size</h4>
      <p>
        {job.company.size || 'n/a'}
      </p>
    </div>
  </div>
);
