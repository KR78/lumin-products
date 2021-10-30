import React from 'react';
import { CartContext } from 'src/components/providers/cartProvider';
import currenyOptions from 'src/helpers/currencyOptions';
import { Products } from 'src/types';
import Button from '../Button';
import Select from '../Select';
import { HideCart } from '../SVG/HideCart';
import style from './Cart.module.scss';
import CartItem from './Components/CartItem';

interface CartProps {
  items: Products,
  selectedCurrency: string,
}

const Cart = ({
  items,
  selectedCurrency,
}: CartProps) => {
  const cartData = React.useContext(CartContext);

  const {
    isCartOpen,
    setIsCartOpen,
    addProductToCart,
    setSelectedCurrency,
    removeProductFromCart,
    deleteProductFromCart,
  } = cartData;

  const getShopping = () => {
    setIsCartOpen(!isCartOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return items
    && (
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
              onChange={setSelectedCurrency}
            />
          </div>
          {
            items
              && items?.length >= 1 ? (
                items.map((item) => (
                  <CartItem
                    id={item?.id || 0}
                    quantity={item?.quantity || 0}
                    imageUrl={item?.imageUrl || ''}
                    title={item?.title || ''}
                    price={item?.price || 0}
                    selectedCurrency={selectedCurrency}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                    deleteProductFromCart={deleteProductFromCart}
                  />
                ))
              )
              : (
                <article className={style.emptyCartWrapper}>
                  <section>
                    <header>
                      <span>There are no items in your cart</span>
                      <Button
                        onClick={() => getShopping()}
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
