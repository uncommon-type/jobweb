export const RadioButton = ({ optionId, name, option }) => {
  return (
    <div className="radiobox">
      <input type="radio" id={optionId} name={name} value={option} />
      <label htmlFor={optionId}>{option}</label>
    </div>
  );
};
