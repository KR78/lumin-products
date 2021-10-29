import React from 'react';
import Button from 'src/components/common/Button';
import style from './ProductCard.module.scss';

interface ProductCardProps {
  id: number,
  title: string,
  imageUrl: string,
  price: number
}

const ProductCard = ({
  id,
  title,
  imageUrl,
  price,
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
      <span className={style.productPrice}>{price}</span>
      <Button
        className={style.addToCart}
        onClick={() => null}
      >
        Add to Cart
      </Button>
    </section>
  </article>
);

export default ProductCard;
