import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --text-secondary: hsl(0deg 0% 78%);
    --border-color: hsl(0deg 0% 86%);
    --bg-color: hsl(0deg 0% 98%);
    --navbar-height: 66px;
    --inter-post-space: 50px;
    --primary-font: 'Montserrat';
    --secondary-font: 'Dancing Script';
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    background-color: var(--bg-color);
    font-family: var(--primary-font);
  }
  ul {
    list-style-type: none
  }
`;

export const LayoutWrapper = styled.section`
  /* height: calc(100vh - 66px); */
  /* height: 1500px; */
  margin: 0 auto;
  width: 70%;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
