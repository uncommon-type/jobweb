import { useFetcher } from 'react-router-dom';

import { CheckboxList } from '@screens/common/Inputs/CheckboxList';

const activityChoicesFetcherKey = 'activity-choices-fetcher';

export const ActivityChoices = ({ choices, jobId }) => {
  const fetcher = useFetcher({ key: activityChoicesFetcherKey });

  const handleOnChange = async (e) => {
    fetcher.submit({ id: e.target.id, activityStatus: e.target.checked, type: e.target.dataset.type }, { method: 'PUT', action: `/jobs/${jobId}/activity/status` });
  };

  const handleOnRemove = async (e) => {
    fetcher.submit({ id: e.currentTarget.id }, { method: 'DELETE', action: `/jobs/${jobId}/activity/ended` });
  };

  return (
    <CheckboxList
      name='activityStatus'
      options={choices}
      selected={choices.filter(activity => activity.done === true).map(({ value }) => value)}
      onChange={handleOnChange}
      fetcherkey={activityChoicesFetcherKey}
      action={{ name: 'Delete', handler: handleOnRemove, icon: 'trashIcon' }}
    />
  );
};
