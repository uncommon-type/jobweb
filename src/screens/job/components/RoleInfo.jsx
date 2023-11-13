export const RoleInfo = ({ job, edit }) => {
  return (
    <div>
      {!edit && <p>role info - view mode</p>}
      {edit && <p>role info - edit mode</p>}
    </div>
  );
};
