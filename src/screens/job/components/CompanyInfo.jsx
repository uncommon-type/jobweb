export const CompanyInfo = ({ job, edit }) => {
  return (
    <div>
      {!edit && <p>company info - view mode</p>}
      {edit && <p>company info - edit mode</p>}
    </div>
  );
};
