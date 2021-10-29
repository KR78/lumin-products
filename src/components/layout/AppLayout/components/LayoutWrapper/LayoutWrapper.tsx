import React from 'react';
import Cart from 'src/components/common/Cart';
import CartProvider from 'src/components/providers/cartProvider';
import Main from '../Main';
import NavBar from '../NavBar';

interface AuthorizedProps {
  children: React.ReactNode
}

const Authorized = ({
  children,
}: AuthorizedProps) => (
  <CartProvider>
    <NavBar />
    <Main>
      {children}
    </Main>
    <Cart />
  </CartProvider>
);

export default Authorized;
