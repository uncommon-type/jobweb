import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="wrapper decor">
      <span className="pin"></span>
      <Outlet />
    </div>
  );
};
// [#18] Implement and render DateTime components

//   - Create time and date input fields for  <DateTimeInput />
//     - Add < DateTimeInput /> to < EditRoleInfo /> component
//     - Implement < EditableDateTime /> displaying current date and time in view mode and input field for editing date and time in edit mode
//       - Render < EditableDateTime /> within < NewEvent /> and < Event />
