import { Label } from './Label';

export const Labelled = ({ id, label, labelHidden, children, className = '', ...otherProps }) => {
  const labelMarkup = label
    ? (
        <Label
          id={id}
          {...otherProps}
          hidden={labelHidden}
        >
          {label}
        </Label>
      )
    : null;

  return (
    <div className={`form-item ${className}`}>
      {labelMarkup}
      {children}
    </div>
  );
};
