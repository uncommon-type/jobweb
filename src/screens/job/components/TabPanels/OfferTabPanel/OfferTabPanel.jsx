import { useOutletContext } from 'react-router-dom';

import { EditOfferTabPanel } from './EditOfferTabPanel';
import { ViewOfferTabPanel } from './ViewOfferTabPanel';

export const OfferTabPanel = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditOfferTabPanel />;
  }

  return <ViewOfferTabPanel />;
};
