import React, { useEffect } from 'react';
import naruto from 'animexyz';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '~modules/common/Navbar';
import { GlobalStyle, LayoutWrapper } from '../style/Layout.style';

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => naruto({ duration: 2000 }), [location]);
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
