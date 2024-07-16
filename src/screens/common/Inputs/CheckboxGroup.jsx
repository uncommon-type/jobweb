import { TrashIcon } from '@heroicons/react/24/outline';

import { EditableCheckbox } from '../EditableCheckbox';

export const CheckboxGroup = ({ options, edit, jobId, onChange, onRemove }) => (
  <fieldset className='flow flow-space-xl option-list'>
    {options.map(({ id, title, done }) => {
      return (
        <div key={id} className='cluster option-list__inner'>
          <EditableCheckbox
            edit={edit}
            name={title}
            checked={done}
            value={title}
            onChange={onChange}
            id={id}
            link={`/jobs/${jobId}/activity/events/${id}`}
          />
          <button className='cluster option-button' aria-label='Delete item'>
            <TrashIcon onClick={onRemove} id={id} />
          </button>
        </div>
      );
    })}
  </fieldset>
);
