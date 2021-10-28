import React from 'react';
import Link from 'next/link';
import {
  PATH_MAP,
  getPathList,
} from 'src/helpers/paths';
import style from './NavBar.module.scss';

const NavBar = () => (
  <nav className={style.wrapper} role="navigation" aria-label="main navigation">
    <div>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="Lumin Logo" />
        </a>
      </Link>
    </div>
    <ul className={style.navLinks}>
      {
        getPathList().map((link) => (
          <li
            key={link.key}
            className={style.linkItem}
          >
            {link.label}
          </li>
        ))
      }
    </ul>
    <div className={style.topRightMenu}>
      <Link href={PATH_MAP.account.href}>
        <a className={style.accountLink}>{PATH_MAP.account.label}</a>
      </Link>
    </div>
  </nav>
);

export default NavBar;
