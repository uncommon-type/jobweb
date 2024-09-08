import { useOutletContext } from 'react-router-dom';

import { EditOfferInfo } from './EditOfferInfo';
import { ViewOfferInfo } from './ViewOfferInfo';

export const OfferInfo = () => {
  const { job, edit, setEdit, errors } = useOutletContext();

  if (edit) {
    return <EditOfferInfo job={job} edit={edit} onEdit={setEdit} errors={errors} />;
  }

  return <ViewOfferInfo job={job} edit={edit} errors={errors} />;
};
