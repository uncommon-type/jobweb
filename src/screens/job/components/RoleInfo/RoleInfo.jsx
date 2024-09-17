import { useOutletContext } from 'react-router-dom';

import { EditRoleInfo } from './EditRoleInfo';
import { ViewRoleInfo } from './ViewRoleInfo';

export const RoleInfo = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditRoleInfo />;
  }

  return <ViewRoleInfo />;
};
