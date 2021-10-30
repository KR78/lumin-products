import React from 'react';
import { RemoveItem } from 'src/components/common/SVG/RemoveItem';
import { Product } from 'src/types';
import AddToCart from '../AddToCart';
import style from './CartItem.module.scss';

interface CartItemProps extends Product {
  addProductToCart(v: Product): void
  removeProductFromCart(v: number): void
}

const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  quantity,
  addProductToCart,
  removeProductFromCart,
}: CartItemProps) => (
  <article className={style.wrapper}>
    <section className={style.section}>
      <header>
        <span>{title}</span>
        <RemoveItem
          className={style.removeItemIcon}
          onClick={() => removeProductFromCart(id)}
          size={12}
        />
      </header>
      <div className={style.productImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={style.bottomRow}>
        <AddToCart
          id={id}
          title={title}
          price={price}
          imageUrl={imageUrl}
          quantity={quantity}
          cartCount={quantity}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
        />
        <span className={style.price}>
          {`$ ${price
            .toLocaleString(
              undefined,
              {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              },
            )
            }`}
        </span>
      </div>
    </section>
  </article>
);

export default CartItem;
