import React from 'react';
import Link from 'next/link';
import { Cart } from 'src/components/common/SVG/Cart';
import Select from 'src/components/common/Select';
import Button from 'src/components/common/Button';
import siteLanguages from 'src/helpers/siteLanguages';
import { Hamburger } from 'src/components/common/SVG/Hamburger';
import { useCartProvider } from 'src/components/providers/cartProvider';
import {
  PATH_MAP,
  getPathList,
} from 'src/helpers/paths';
import style from './NavBar.module.scss';

const NavBar = () => {
  const cartData = useCartProvider();

  const {
    isCartOpen,
    setIsCartOpen,
    cartItemsCount,
  } = cartData;

  return (
    <nav className={style.wrapper} role="navigation" aria-label="main navigation">
      <div className={style.logo}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Lumin Logo" />
          </a>
        </Link>
      </div>
      <div className={style.hamburger}>
        <Button
          onClick={() => null}
        >
          <Hamburger
            size={15}
          />
        </Button>
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
          <Button
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {
              Cart({
                size: 35,
                className: style.cartIcon,
              })
            }
          </Button>
          <span className={style.cartItemsCount}>{cartItemsCount}</span>
        </div>
        <Select
          className={style.select}
          options={siteLanguages}
        />
      </div>
    </nav>
  );
};

export default NavBar;
