import { useOutletContext } from 'react-router-dom';

import { EditCompanyTabPanel } from './EditCompanyTabPanel';
import { ViewCompanyTabPanel } from './ViewCompanyTabPanel';

export const CompanyTabPanel = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditCompanyTabPanel />;
  }

  return <ViewCompanyTabPanel />;
};
