import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font: 16px 'Roboto' sans-serif;
    background: #f5f5f5;
    width: 100vw;
    min-height: 100vh;
  }

  #root {
    font-size: 62.5%;
    width: 100%;
    min-height: 100vh;

    margin: 0 auto;

    a {
      text-decoration: none;
    }

    @media (max-width: 700px) {
      width: 100vw;
    }
  }

`;
