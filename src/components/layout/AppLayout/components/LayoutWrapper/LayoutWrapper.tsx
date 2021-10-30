import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import CartProvider from 'src/components/providers/cartProvider';
import Main from '../Main';
import NavBar from '../NavBar';

interface LayoutWrapperProps {
  children: React.ReactNode
}

const client = new ApolloClient({
  uri: ' https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache(),
});

const LayoutWrapper = ({
  children,
}: LayoutWrapperProps) => (
  <ApolloProvider client={client}>
    <CartProvider>
      <NavBar />
      <Main>
        {children}
      </Main>
    </CartProvider>
  </ApolloProvider>
);

export default LayoutWrapper;
