import React from 'react';
import style from './Select.module.scss';

interface SelectProps {
  options: Array<{
    label: string,
    value: string
  }>
  className?: string
}

const Select = ({
  options,
  className,
}: SelectProps) => (
  <select className={`${style.wrapper} ${className}`}>
    {
      options.map((option) => (
        <option value={option.value}>
          {option.label}
        </option>
      ))
    }
  </select>
);

Select.defaultProps = {
  className: '',
};

export default Select;
