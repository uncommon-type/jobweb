import { useOutletContext } from 'react-router-dom';

import { EditOfferInfo } from './EditOfferInfo';
import { ViewOfferInfo } from './ViewOfferInfo';

export const OfferInfo = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditOfferInfo />;
  }

  return <ViewOfferInfo />;
};
