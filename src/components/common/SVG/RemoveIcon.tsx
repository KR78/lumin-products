import React from 'react';
import { SVGIcon } from 'src/types';

export const RemoveIcon = ({
  size = 12,
  className = '',
}: SVGIcon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 384 512"
    className={className}
  >
    <path
      fill="currentColor"
      d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
    />
  </svg>
);
