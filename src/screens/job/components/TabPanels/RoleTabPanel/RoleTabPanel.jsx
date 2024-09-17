import { useOutletContext } from 'react-router-dom';

import { EditRoleTabPanel } from './EditRoleTabPanel';
import { ViewRoleTabPanel } from './ViewRoleTabPanel';

export const RoleTabPanel = () => {
  const { edit } = useOutletContext();

  if (edit) {
    return <EditRoleTabPanel />;
  }

  return <ViewRoleTabPanel />;
};
