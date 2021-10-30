import React from 'react';
import { Product } from 'src/types';
import Button from 'src/components/common/Button';
import style from './ProductCard.module.scss';

interface ProductCardProps extends Product {
  addToCart(v: Product): void
  selectedCurrency: string

}

const ProductCard = ({
  id,
  title,
  imageUrl,
  price,
  addToCart,
  selectedCurrency,
}: ProductCardProps) => (
  <article
    key={id}
    className={style.wrapper}
  >
    <section className={style.content}>
      <img
        className={style.productImage}
        src={imageUrl}
        alt={title}
      />
      <span className={style.productTitle}>{title}</span>
      <span className={style.productPrice}>
        {`${selectedCurrency} ${price
          .toLocaleString(
            undefined,
            {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            },
          )
        }`}
      </span>
      <Button
        className={style.addToCart}
        onClick={() => addToCart({
          id,
          title,
          imageUrl,
          price,
        })}
      >
        Add to Cart
      </Button>
    </section>
  </article>
);

export default ProductCard;
