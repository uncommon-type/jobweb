import { useOutletContext } from 'react-router-dom';

import { EditCompanyInfo } from './EditCompanyInfo';
import { ViewCompanyInfo } from './ViewCompanyInfo';

export const CompanyInfo = () => {
  const { job, edit, setEdit, errors } = useOutletContext();

  if (edit) {
    return <EditCompanyInfo job={job} edit={edit} onEdit={setEdit} errors={errors} />;
  }

  return <ViewCompanyInfo job={job} />;
};
