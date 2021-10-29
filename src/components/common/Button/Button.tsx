/* eslint-disable react/button-has-type */
import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  unStyled?: boolean
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick: Function
}

const Button = ({
  type,
  className,
  unStyled,
  loading,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  const buttonClassName = () => {
    let c = '';
    if (className) {
      c += `${className} `;
    }
    if (unStyled) {
      return `${c} ${style.unStyled}`;
    }
    if (loading) {
      c += ' is-loading';
    }
    return c;
  };

  return (
    <button
      type={type}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
      className={buttonClassName()}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  type: 'button',
  unStyled: true,
  disabled: false,
  loading: false,
};

export default Button;
