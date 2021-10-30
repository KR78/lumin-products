import { string } from 'prop-types';
import React from 'react';
import { CartContext } from 'src/components/providers/cartProvider';
import { Currency } from 'src/types';
import Button from '../Button';
import Select from '../Select';
import { HideCart } from '../SVG/HideCart';
import style from './Cart.module.scss';
import CartItem from './Components/CartItem';

const defaultCurrency = 'USD';

const Cart = () => {
  const cartData = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);

  const {
    cart,
    cartLoading,
    isCartOpen,
    setIsCartOpen,
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart,
  } = cartData;

  const currenyOptions = Object.values(Currency)
    .map((val) => ({
      label: val,
      value: val,
      selected: val === defaultCurrency,
    } as {
      label: string,
      value: string,
    }))
    .filter((l) => typeof l.label === 'string');

  React.useEffect(() => {
    if (!cart) {
      return;
    }
    setCartItems(cart);
  }, [cartItems, cart]);

  return cartLoading
    && !cartItems
    ? (<div>Loading...</div>)
    : (
      <article className={`${style.wrapper} ${isCartOpen ? style.show : style.hidden}`}>
        <section className={style.cart}>
          <header className={style.header}>My Shopping Cart</header>
          <div className={style.cartTopActions}>
            <Button
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <HideCart size={24} />
            </Button>
            <Select
              className={style.currencySelect}
              options={currenyOptions}
            />
          </div>
          {
            cartItems?.length > 1 ? (
              cartItems.map((item) => (
                <CartItem
                  id={item?.id || 0}
                  quantity={item?.quantity || 0}
                  imageUrl={item?.imageUrl || ''}
                  title={item?.title || ''}
                  price={item?.price || 0}
                  addProductToCart={addProductToCart}
                  removeProductFromCart={removeProductFromCart}
                  deleteProductFromCart={deleteProductFromCart}
                />
              ))
            )
              : (
                <article>
                  <section>
                    <header>
                      <span>There are no items in your cart</span>
                      <Button
                        onClick={() => null}
                      >
                        Get shopping &gt;&gt;
                      </Button>
                    </header>
                  </section>
                </article>
              )
          }
        </section>
      </article>
    );
};

export default Cart;
