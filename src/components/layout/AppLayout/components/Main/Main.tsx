import React from 'react';
import Cart from 'src/components/common/Cart';
import { Currency, Products } from 'src/types';
import getProducts from 'src/service/getProducts';
import { useCartProvider } from 'src/components/providers/cartProvider';

interface LayoutProps {
  children: React.ReactNode
}

const Main = ({ children }: LayoutProps) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    selectedCurrency,
    updateCart,
  } = useCartProvider();

  const [currentCurrency, setCurrentCurrency] = React.useState(Currency.USD);
  const [isLoading, setIsLoading] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<Products>([]);

  const { loading, error, data } = getProducts(selectedCurrency);

  React.useEffect(() => {
    if (loading) setIsLoading(loading);

    if (data && data.products) {
      const updateCartItems = () => {
        const { products } = data;

        const updatedCart = (cart || []).reduce((acc, current, index) => {
          const currentId = current?.id || 0;
          const product = (products || []).filter((prod) => prod?.id === currentId)[0];
          const cartItem = (cart || []).filter((item) => item?.id === currentId)[0];
          return [
            ...acc,
            {
              id: product?.id,
              title: product?.title,
              imageUrl: product?.imageUrl,
              quantity: cartItem?.quantity,
              originalPrice: product?.price,
              price: product?.price * cart[index]?.quantity,
            },
          ];
        }, []);
        updateCart(updatedCart);
        setCartItems(updatedCart);
      };

      if (selectedCurrency !== currentCurrency) {
        setCurrentCurrency(selectedCurrency);
        updateCartItems();
      } else {
        setCartItems(cart);
      }
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cart,
    loading,
    data,
    selectedCurrency,
  ]);

  return (
    <>
      <div>
        <main>
          <div className="container is-max-widescreen">
            {children}
          </div>
        </main>
        {
          isCartOpen
          && !isLoading
          && !error
          && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              tabIndex={0}
              aria-label="hidden"
              role="button"
              className="overlay"
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
          )
        }
      </div>
      <Cart
        items={cartItems}
        selectedCurrency={selectedCurrency}
      />
    </>
  );
};

export default Main;
