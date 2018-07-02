import React from 'react';
import styled from 'styled-components';

import NavbarLink from './NavbarLink';

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;

  > * {
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  > :not(:first-child) {
    position: relative;

    &::after {
      content: "";
      left: 0;
      height: 1.2rem;
      top: 0.2rem;
      position: absolute;
      width: 2px;
      background-color: ${props => props.theme.color.black};
    }
  }
`;

const I = styled.i`
  color: ${props => props.theme.color.black};
  font-size: 1.5rem;
  position: relative;
`;

const SearchButton = I.extend.attrs({
  className: 'fa fa-search'
})``;

const ShoppingCart = I.extend.attrs({
  className: 'fas fa-shopping-cart'
})`
  position: relative; 
  top: -0.2rem;
  padding-right: 0.3rem;
`;

const ShopLinks = () => (
  <Layout>
    <SearchButton />
    <NavbarLink to="/cart"><ShoppingCart />(0)</NavbarLink>
    <NavbarLink to="/cart">Ayuda</NavbarLink>
  </Layout>
);

export default ShopLinks;