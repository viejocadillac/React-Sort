import React from 'react';
import './Button.scss';

const Button = ({ text, disabled, onClick }) => {
  return (
    <button disabled={disabled} type="button" className={`btn primary`} onClick={onClick}>{text}</button>
  );
};

export default Button;
