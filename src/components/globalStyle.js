import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    --text-secondary: hsl(0deg 0% 65%);
    --border-color: hsl(0deg 0% 86%);
    --bg-color: hsl(0deg 0% 98%);
    --bg-color-btn: hsl(204deg 100% 48%);
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
