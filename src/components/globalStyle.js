import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    --text-secondary: hsl(0deg 0% 65%);
    --border-color: hsl(0deg 0% 86%);
    --bg-color: hsl(0deg 0% 98%);
    --bg-color-btn: hsl(204deg 100% 48%);
    --navbar-height: 66px;
    --inter-post-space: 50px;
    --primary-font: 'Montserrat';
    --secondary-font: 'Pacifico';
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    background-color: var(--bg-color);
    font-family: var(--primary-font);

    [data-reach-menu-button] {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
    }

    [data-reach-menu-popover] {
      border-radius: 6px;
      z-index: 1;
    }

    [data-reach-menu-item][data-selected] {
      background: lightgray;
      color: #333
    }
  }
  ul {
    list-style-type: none
  }
`
