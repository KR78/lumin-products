import React from 'react';
import { Product } from 'src/types';
import Button from 'src/components/common/Button';
import { AddIcon } from 'src/components/common/SVG/AddIcon';
import { RemoveIcon } from 'src/components/common/SVG/RemoveIcon';
import style from './AddToCart.module.scss';

interface AddToCart extends Product{
  loading?: boolean,
  cartCount?: number,
  addProductToCart(v: Product): void
  removeProductFromCart(v: number): void
}

const AddToCart = ({
  id,
  title,
  price,
  imageUrl,
  quantity,
  loading,
  cartCount,
  addProductToCart,
  removeProductFromCart,
}: AddToCart) => (
  <div className={style.wrapper}>
    <Button
      disabled={loading}
      onClick={() => removeProductFromCart(id)}
    >
      <RemoveIcon />
    </Button>
    <span className={style.cartCount}>{cartCount}</span>
    <Button
      disabled={loading}
      onClick={() => addProductToCart({
        id,
        title,
        price,
        imageUrl,
        quantity,
      })}
    >
      <AddIcon />
    </Button>
  </div>
);

AddToCart.defaultProps = {
  loading: false,
  cartCount: 1,
};

export default AddToCart;
