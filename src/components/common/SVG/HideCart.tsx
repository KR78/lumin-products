import React from 'react';
import { SVGIcon } from 'src/types';

export const HideCart = ({
  size = 24,
  className = '',
}: SVGIcon) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12Z" stroke="#C6CCC7" />
    <path d="M7.15801 6.89299L6.22993 7.357C6.01027 7.46683 6.01027 7.64491 6.22993 7.75476L14.7002 12L6.22993 16.2452C6.01027 16.3551 6.01027 16.5331 6.22993 16.643L7.15801 17.107C7.37766 17.2169 7.73382 17.2169 7.95352 17.107L17.7698 12.1989C17.9895 12.0891 17.9895 11.911 17.7698 11.8011L7.95352 6.89299C7.73382 6.78314 7.37766 6.78314 7.15801 6.89299Z" fill="black" />
  </svg>

);
