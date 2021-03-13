import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '~components/Navbar';
import { GlobalStyle, LayoutWrapper } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
