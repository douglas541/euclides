import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: sans-serif;
    font-weight: 300;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle;