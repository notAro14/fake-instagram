import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import propTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

const LayoutContainer = styled.div`
  height: 100vh;
  padding: 0 200px;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  html {
    font-family: sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background-color: #eee;
  }
  ul {
    list-style-type: none;
  }
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Navbar />
    {children}
  </LayoutContainer>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
