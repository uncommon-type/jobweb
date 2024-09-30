import { Link } from 'react-router-dom';

export const Choice = ({ id, label, labelClassName, labelHidden, ...props }) => {
  const labelClass = labelHidden ? 'sr-only' : `items-center ${labelClassName}`;
  const labelText = labelHidden ? `Edit ${label}` : label;

  const contentMarkup = (
    props.link
      ? <Link to={props.link} aria-label={`View details for ${label}`}>{labelText}</Link>
      : labelText
  );

  const className = `${labelClass} ${labelClassName}`;

  return (
    <label htmlFor={id} className={className}>
      {contentMarkup}
    </label>
  );
};
