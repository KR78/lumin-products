import { gql, useQuery } from '@apollo/client';

const FetchProducts = (selectedCurrency: string) => {
  const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      imageUrl: image_url
      price(currency: ${selectedCurrency})
    }
  }
`;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return (
    {
      loading,
      error,
      data,
    }
  );
};

export default FetchProducts;
