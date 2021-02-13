import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  ul {
    list-style-type: none
  }
`;

export const LayoutWrapper = styled.main`
  height: 1500px;
  background-color: #fafafa;
`;
