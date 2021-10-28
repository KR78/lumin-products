import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

const Main = ({ children }: LayoutProps) => (
  <div>
    <main>
      <div className="container is-max-widescreen">
        {children}
      </div>
    </main>
  </div>
);

export default Main;
