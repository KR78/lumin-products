import React from 'react';
import { useCartProvider } from 'src/components/providers/cartProvider';

interface LayoutProps {
  children: React.ReactNode
}

const Main = ({ children }: LayoutProps) => {
  const {
    isCartOpen,
    setIsCartOpen,
  } = useCartProvider();

  return (
    <div>
      <main>
        <div className="container is-max-widescreen">
          {children}
        </div>
      </main>
      {
        isCartOpen
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
    </div >
  );
};

export default Main;
