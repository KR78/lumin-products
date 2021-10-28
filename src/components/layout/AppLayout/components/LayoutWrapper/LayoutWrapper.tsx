import React from 'react';
import Main from '../Main';

interface AuthorizedProps {
  children: React.ReactNode
}

const Authorized = ({
  children,
}: AuthorizedProps) => (
  <Main>
    {children}
  </Main>
);

export default Authorized;
