import { useFetcher } from 'react-router-dom';

import { TrashIcon } from '@heroicons/react/24/outline';

import { EditableCheckbox } from '../EditableCheckbox';

export const CheckboxGroup = ({ options, edit, jobId }) => {
  const fetcher = useFetcher();

  const handleChange = async (e) => {
    fetcher.submit({ id: e.target.id, done: e.target.checked, type: e.target.form.type.value }, { method: 'PUT' });
  };

  const handleOptionRemove = async (e) => {
    fetcher.submit({ id: e.target.id }, { method: 'DELETE' });
  };

  return (
    <div className='flow flow-space-xl option-list'>
      {options.map(({ id, title, done, type }) => {
        return (
          <div key={id} className='cluster option-list__inner'>
            <fetcher.Form method='put' className='full-width'>
              <input
                name='id'
                type='hidden'
                value={id}
              />
              <input
                name='type'
                type='hidden'
                value={type}
              />
              <EditableCheckbox
                edit={edit}
                name={title}
                checked={done}
                value={title}
                onChange={handleChange}
                id={id}
                link={`/jobs/${jobId}/activity/${type}s/${id}`}
              />
            </fetcher.Form>
            <button className='cluster option-button' aria-label='Delete item'>
              <TrashIcon onClick={handleOptionRemove} id={id} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
