import { useFetcher } from 'react-router-dom';

import { TrashIcon } from '@heroicons/react/24/outline';

import { EditableCheckbox } from '../EditableCheckbox';

export const CheckboxGroup = ({ options, edit, jobId, getActivityTypeById }) => {
  const fetcher = useFetcher();

  const handleChange = async (e) => {
    const activityId = e.target.id;
    const activityType = getActivityTypeById(activityId);
    fetcher.submit({ id: e.target.id, done: e.target.checked, type: activityType }, { method: 'PUT', action: `/jobs/${jobId}/activity` });
  };

  const handleOptionRemove = async (e) => {
    fetcher.submit({ id: e.currentTarget.id }, { method: 'DELETE', action: `/jobs/${jobId}/activity` });
  };

  return (
    <div className='flow flow-space-xl option-list'>
      {options.map(({ id, title, done }) => {
        return (
          <div key={id} className='cluster option-list__inner'>
            <EditableCheckbox
              edit={edit}
              name={title}
              checked={done}
              value={title}
              onChange={handleChange}
              id={id}
              link={`/jobs/${jobId}/activity/events/${id}`}
            />
            <button className='cluster option-button' aria-label='Delete item' id={id} onClick={handleOptionRemove}>
              <TrashIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
};
