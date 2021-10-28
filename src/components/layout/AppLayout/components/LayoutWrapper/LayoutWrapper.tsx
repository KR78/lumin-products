import React from 'react';
import Main from '../Main';
import NavBar from '../NavBar';

interface AuthorizedProps {
  children: React.ReactNode
}

const Authorized = ({
  children,
}: AuthorizedProps) => (
  <>
    <NavBar />
    <Main>
      {children}
    </Main>
  </>
);

export default Authorized;
