import { Label } from './Label';

export const Labelled = ({ id, label, labelHidden, children, className = '' }) => {
  const labelMarkup = label
    ? (
        <Label
          id={id}
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
