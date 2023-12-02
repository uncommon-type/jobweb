export const Filter = ({ onFilterSelection, id, number }) => {
  return (
    <li>
      <span className="pill" onClick={() => onFilterSelection(id)}>
        {id} ({number})
      </span>
    </li>
  );
};
