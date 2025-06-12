import React from 'react';
import styles from './button.module.css';

const Button = (props) => {
  const { 
    children, 
    variant, 
    disabled, 
    inverted, 
    fullWidth, 
    onClick, 
    type 
  } = props;

  // decide which css class to use
  let buttonClass = styles.button;
  
  if (variant === 'primary') {
    buttonClass += ' ' + styles.primary;
  } else if (variant === 'secondary') {
    buttonClass += ' ' + styles.secondary;
  } else if (variant === 'text') {
    buttonClass += ' ' + styles.text;
  } else {
    // default to primary
    buttonClass += ' ' + styles.primary;
  }
  
  if (inverted) {
    buttonClass += ' ' + styles.inverted;
  }
  
  if (fullWidth) {
    buttonClass += ' ' + styles.fullWidth;
  }

  return (
    <button
      type={type || 'button'}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children || 'Continue'}
    </button>
  );
};

export default Button;