import { useOutletContext } from 'react-router-dom';

import { EditRoleInfo } from './EditRoleInfo';
import { ViewRoleInfo } from './ViewRoleInfo';

export const RoleInfo = () => {
  const { job, edit } = useOutletContext();

  if (edit) {
    return <EditRoleInfo job={job} edit={edit} />;
  }

  return <ViewRoleInfo job={job} />;
};


