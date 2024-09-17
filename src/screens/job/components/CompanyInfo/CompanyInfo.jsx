import { useOutletContext } from 'react-router-dom';

import { EditCompanyInfo } from './EditCompanyInfo';
import { ViewCompanyInfo } from './ViewCompanyInfo';

export const CompanyInfo = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditCompanyInfo />;
  }

  return <ViewCompanyInfo />;
};
