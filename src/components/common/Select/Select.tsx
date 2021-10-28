import React from 'react';
import { SelectOptions } from 'src/types';
import style from './Select.module.scss';

interface SelectProps {
  options: SelectOptions
  className?: string
}

const Select = ({
  options,
  className,
}: SelectProps) => (
  <select className={`${style.wrapper} ${className}`}>
    {
      options.map((option) => (
        <option
          value={option.value}
          selected={option.selected}
          disabled={option.disabled}
        >
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
