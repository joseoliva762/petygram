import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fafafa;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;

    @media (max-width: 613px) {
      background: #fff;
    }
  }

  #app {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px;
    width: 100%;
  }
`;
