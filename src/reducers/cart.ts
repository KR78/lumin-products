/* eslint-disable no-plusplus */
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

const addItemToCart = (product, state) => {
  const newCart = [...state.cart];
  const itemToUpdate = newCart.findIndex(
    (item) => item.id === product.id,
  );

  if (itemToUpdate < 0) {
    newCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...newCart[itemToUpdate],
    };
    updatedItem.quantity++;
    updatedItem.price *= updatedItem.quantity;
    newCart[itemToUpdate] = updatedItem;
  }
  return { ...state, cart: newCart };
};

const removeProductFromCart = (productId, state) => {
  const newCart = [...state.cart];
  const itemToUpdate = newCart.findIndex((item) => item.id === productId);

  const updatedItem = {
    ...newCart[itemToUpdate],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    newCart.splice(itemToUpdate, 1);
  } else {
    newCart[itemToUpdate] = updatedItem;
  }
  return { ...state, cart: newCart };
};

const deleteProductFromCart = (productId, state) => {
  const newCart = [...state.cart];

  const updatedCart = newCart.filter((product) => product.id !== productId);

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addItemToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case DELETE_PRODUCT:
      return deleteProductFromCart(action.productId, state);
    default:
      return state;
  }
};
