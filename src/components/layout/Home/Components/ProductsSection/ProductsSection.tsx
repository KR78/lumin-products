import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { CartContext } from 'src/components/providers/cartProvider';
import { Currency, Product, Products } from 'src/types';
import getProducts from 'src/service/getProducts';
import ProductCard from './components/ProductCard';
import style from './ProductsSection.module.scss';

const ProductsSection = () => {
  const cartData = React.useContext(CartContext);

  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    setCartLoading,
    selectedCurrency,
    addProductToCart,
  } = cartData;

  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  const [products, setProducts] = React.useState<Products>([]);

  const { loading, error, data } = getProducts(selectedCurrency);

  React.useEffect(() => {
    if (loading) setIsLoading(loading);
    if (error) setErrorMessage(`Error! ${error.message}`);

    if (data && data.products) {
      setProducts(data?.products || []);
      setIsLoading(false);
    }
  }, [
    data,
    error,
    loading,
    selectedFilter,
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
                  products.map((product) => (
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
