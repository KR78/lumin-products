import React from 'react';
import Link from 'next/link';
import { CartSVG } from 'src/components/common/SVG/CartSVG';
import Select from 'src/components/common/Select';
import siteLanguages from 'src/helpers/siteLanguages';
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
      <div className={style.cart}>
        {
          CartSVG({
            size: 35,
            className: style.cartIcon,
          })
        }
        <span className={style.cartItemsCount}>1</span>
      </div>
      <Select options={siteLanguages} />
    </div>
  </nav>
);

export default NavBar;
