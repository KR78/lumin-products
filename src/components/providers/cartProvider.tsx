import React from 'react';
import { Product, Products } from 'src/types';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from 'src/reducers/cart';

interface CartContextProps {
  cart: Products,
  isCartOpen: boolean,
  cartLoading: boolean,
  cartItemsCount: number,
  addProductToCart(v: Product): void,
  setIsCartOpen(v: boolean): void,
  setCartLoading(v: boolean): void,
  removeProductFromCart(v: number): void
}

export const CartContext = React.createContext({} as CartContextProps);

interface CartProviderProps {
  children: React.ReactNode,
}

const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartLoading, setCartLoading] = React.useState(false);

  const [cartState, dispatch] = React.useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product });
    }, 300);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId });
    }, 300);
  };

  const cart = cartState?.cart || [];

  const cartItemsCount = (cart || [])?.reduce((count, item) => count + (item?.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartItemsCount,
        setIsCartOpen,
        cartLoading,
        setCartLoading,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => React.useContext(CartContext);

export default CartProvider;
