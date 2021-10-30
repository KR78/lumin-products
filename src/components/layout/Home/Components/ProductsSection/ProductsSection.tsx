import React from 'react';
import { CartContext } from 'src/components/providers/cartProvider';
import { Product, Products } from 'src/types';
import getProducts from 'src/service/getProducts';
import ProductCard from './components/ProductCard';
import style from './ProductsSection.module.scss';

const ProductsSection = () => {
  const cartData = React.useContext(CartContext);

  const {
    isCartOpen,
    setIsCartOpen,
    setCartLoading,
    selectedCurrency,
    addProductToCart,
  } = cartData;

  const [isLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState<Products>([]);

  const { loading, error, data } = getProducts(selectedCurrency);

  React.useEffect(() => {
    if (loading) setIsLoading(loading);

    if (data && data.products) {
      setProducts(data?.products || []);
      setIsLoading(false);
    }
  }, [
    data,
    loading,
    selectedCurrency,
  ]);

  const addToCart = (v: Product) => {
    setIsCartOpen(!isCartOpen);
    setCartLoading(true);
    addProductToCart(v);
    setCartLoading(false);
  };

  return (
    <article className={style.wrapper}>
      <section className={style.section}>
        {
          isLoading
            ? (
              <span>Loading...</span>
            )
            : (
              <>
                {
                  products
                  && products.length >= 1
                  && !error
                  && products.map((product) => (
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      addToCart={addToCart}
                      selectedCurrency={selectedCurrency}
                    />
                  ))
                }
              </>
            )
        }
      </section>
    </article>
  );
};

export default ProductsSection;
