import React from 'react';
import {
  Currency,
  Product,
  Products,
} from 'src/types';
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_CART,
} from 'src/reducers/cart';

interface CartContextProps {
  cart: Products,
  isCartOpen: boolean,
  cartLoading: boolean,
  cartItemsCount: number,
  selectedCurrency: Currency,
  addProductToCart(v: Product): void,
  updateCart(v: Products): void,
  setIsCartOpen(v: boolean): void,
  setCartLoading(v: boolean): void,
  removeProductFromCart(v: number): void
  deleteProductFromCart(v: number): void
  setSelectedCurrency(v: Currency): void
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
  const [selectedCurrency, setSelectedCurrency] = React.useState(Currency.USD);

  const [cartState, dispatch] = React.useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setCartLoading(true);
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product });
      setCartLoading(false);
    }, 300);
  };

  const removeProductFromCart = (productId) => {
    setCartLoading(true);
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId });
      setCartLoading(false);
    }, 300);
  };

  const deleteProductFromCart = (productId) => {
    setCartLoading(true);
    setTimeout(() => {
      dispatch({ type: DELETE_PRODUCT, productId });
      setCartLoading(false);
    }, 300);
  };

  const updateCart = (cart) => {
    dispatch({ type: UPDATE_CART, cart });
  };

  const cart = cartState?.cart || [];

  const cartItemsCount = (cart || [])?.reduce((count, item) => count + (item?.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartItemsCount,
        cartLoading,
        selectedCurrency,
        setIsCartOpen,
        setCartLoading,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
        setSelectedCurrency,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => React.useContext(CartContext);

export default CartProvider;
