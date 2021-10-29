import React from 'react';
import { Products } from 'src/types';

interface CartContextProps {
  cart: Products,
  setCart(v: []): void,
  isCartOpen: boolean,
  setIsCartOpen(v: boolean): void,
}

export const CartContext = React.createContext({} as CartContextProps);

interface CartProviderProps {
  children: React.ReactNode,
}

const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setCart,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => React.useContext(CartContext);

export default CartProvider;
