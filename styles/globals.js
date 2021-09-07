import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle;