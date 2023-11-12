import { useParams, Link } from 'react-router-dom';

export const CheckboxGroup = ({ options }) => {
  const { jobId } = useParams();

  return (
    <fieldset className="flow flow-space-s">
      {options.map((option) => {
        return (
          <div key={option.id} className="activity" data-status="complete">
            <div className="cluster with-checkbox-btn">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id={`activity-${option.id}`}
                  name="activity"
                />
                <label htmlFor={`activity-${option.id}`}>
                  <Link
                    to={`/jobs/${jobId}/activity/events/${option.id}`}
                    aria-label="View details"
                  >
                    {option.title}
                  </Link>
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};
