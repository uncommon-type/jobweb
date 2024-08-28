import { useOutletContext } from 'react-router-dom';

import { EditRoleInfo } from './EditRoleInfo';
import { ViewRoleInfo } from './ViewRoleInfo';

export const RoleInfo = () => {
  const { job, edit, setEdit, errors } = useOutletContext();

  if (edit) {
    return <EditRoleInfo job={job} edit={edit} onEdit={setEdit} errors={errors} />;
  }

  return <ViewRoleInfo job={job} />;
};
