import React from 'react';
import Link from 'next/link';

const NavBar = () => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Lumin Logo" />
        </a>
      </Link>
    </div>
  </nav>
);

export default NavBar;
