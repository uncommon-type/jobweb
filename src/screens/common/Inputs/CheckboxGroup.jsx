import { EditableCheckbox } from '../EditableCheckbox';

export const CheckboxGroup = ({ options, edit, jobId, onChange }) => {
  return (
    <fieldset className="flow flow-space-s option-list">
      {options.map((option) => {
        return (
          <EditableCheckbox key={option.id}
            edit={edit}
            name={option.title}
            checked={option.done}
            value={option.title}
            onChange={onChange}
            id={option.id}
            link={`/jobs/${jobId}/activity/events/${option.id}`}
          />
        );
      })}
    </fieldset>
  );
};
