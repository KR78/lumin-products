import React from 'react';
import { CartContext } from 'src/components/providers/cartProvider';
import style from './Cart.module.scss';

const Cart = () => {
  const cartData = React.useContext(CartContext);

  const {
    isCartOpen,
  } = cartData;

  return (
    <article className={`${style.wrapper} ${isCartOpen ? style.show : style.hidden}`}>
      <section className={style.cart}>
        <header className={style.header}>My Shopping Cart</header>
      </section>
    </article>
  );
};

export default Cart;
