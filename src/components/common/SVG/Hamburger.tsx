import React from 'react';
import { SVGIcon } from 'src/types';

export const Hamburger = ({
  size = 24,
  className = '',
}: SVGIcon) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h16v1H0V0zM0 5h16v1H0V5zM0 10h16v1H0v-1z" fill="#2B2E2B" />
  </svg>

);
