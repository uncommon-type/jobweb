import { useOutletContext } from 'react-router-dom';

import { EditCompanyInfo } from './EditCompanyInfo';
import { ViewCompanyInfo } from './ViewCompanyInfo';

export const CompanyInfo = () => {
  const { job, edit } = useOutletContext();

  if (edit) {
    return <EditCompanyInfo job={job} edit={edit} />;
  }

  return <ViewCompanyInfo job={job} />;
};
