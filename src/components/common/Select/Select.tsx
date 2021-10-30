import React from 'react';
import { SelectOptions } from 'src/types';
import style from './Select.module.scss';

interface SelectProps {
  options: SelectOptions
  className?: string
  onChange?(v: string): void
}

const Select = ({
  options,
  onChange,
  className,
}: SelectProps) => (
  <select
    className={`${style.wrapper} ${className}`}
    onChange={(e) => onChange(e?.target?.value)}
  >
    {
      options.map((option) => (
        <option
          key={option.label}
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
  onChange: () => null,
};

export default Select;
