export const Task = ({ activity, edit }) => {
  return (
    <div>
      {!edit && <p>Task view - view mode</p>}
      {edit && <p>Task view - edit mode</p>}
    </div>
  );
};
