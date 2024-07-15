import { Link } from 'react-router-dom';

import { ButtonInner } from './ButtonInner';

import styles from './button.module.css';

const buttonStyles = {
  variant: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    naked: 'btn-naked',
  },
};

export const Button = ({ to, className = '', label = '', icon = '', variant = '', ...otherProps }) => {
  const Tag = to ? Link : 'button';
  const variantClass = variant ? styles[buttonStyles.variant[variant]] : '';

  return (
    <Tag
      to={to}
      className={`button ${variantClass} ${className}`}
      {...otherProps}
    >
      <ButtonInner icon={icon} className={className} label={label} />
    </Tag>
  );
};
