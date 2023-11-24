import { useParams } from 'react-router-dom';

import { EditableCheckbox } from './EditableCheckbox';

export const CheckboxGroup = ({ options, edit }) => {
  const { jobId } = useParams();

  return (
    <fieldset className="flow flow-space-s">
      {options.map((option) => {
        return (
          <div key={option.id} className="activity" data-status="complete">
            <EditableCheckbox
              edit={edit}
              value={option.title}
              name="activity"
              link={`/jobs/${jobId}/activity/events/${option.id}`}
            />
          </div>
        );
      })}
    </fieldset>
  );
};
