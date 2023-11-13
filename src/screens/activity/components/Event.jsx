export const Event = ({ activity, edit }) => {
  return (
    <div>
      {!edit && <p>Event view - view mode</p>}
      {edit && <p>Event view - edit mode</p>}
    </div>
  );
};
