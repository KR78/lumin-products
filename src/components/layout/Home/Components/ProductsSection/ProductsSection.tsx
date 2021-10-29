import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Products } from 'src/types';
import ProductCard from './components/ProductCard';
import style from './ProductsSection.module.scss';

const ProductsSection = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  const [products, setProducts] = React.useState<Products>([]);

  const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      imageUrl: image_url
      price(currency: USD)
    }
  }
`;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  React.useEffect(() => {
    if (loading) setIsLoading(loading);
    if (error) setErrorMessage(`Error! ${error.message}`);

    if (data && data.products) {
      setProducts(data?.products || []);
      setIsLoading(false);
    }
  }, [
    selectedFilter,
    loading,
    data,
    error,
  ]);

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
