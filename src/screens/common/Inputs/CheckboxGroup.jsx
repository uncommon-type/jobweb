import { MinusCircleIcon } from '@heroicons/react/24/outline';

import { EditableCheckbox } from '../EditableCheckbox';

export const CheckboxGroup = ({ options, edit, jobId, onChange }) => {
  return (
    <fieldset className="flow flow-space-s option-list">
      {options.map(({ id, title, done }) => {
        return (
          <div key={id} className="cluster option-list__inner">
            <EditableCheckbox key={id}
              edit={edit}
              name={title}
              checked={done}
              value={title}
              onChange={onChange}
              id={id}
              link={`/jobs/${jobId}/activity/events/${id}`}
            />
            <div className="cluster option-icon">
              <MinusCircleIcon id={id} />
            </div>
          </div>
        );
      })}
    </fieldset >
  );
};
