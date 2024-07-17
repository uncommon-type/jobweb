export const Filter = ({ onFilterSelection, id, number }) => (
  <li>
    <span className='pill' onClick={() => onFilterSelection(id)}>
      {id}
      {number}
    </span>
  </li>
);
