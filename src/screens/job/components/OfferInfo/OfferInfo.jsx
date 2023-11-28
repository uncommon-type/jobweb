import { useOutletContext } from 'react-router-dom';

import { EditOfferInfo } from './EditOfferInfo';
import { ViewOfferInfo } from './ViewOfferInfo';

export const OfferInfo = () => {
  const { job, edit } = useOutletContext();

  if (edit) {
    return <EditOfferInfo job={job} edit={edit} />;
  }

  return <ViewOfferInfo job={job} />;
};
