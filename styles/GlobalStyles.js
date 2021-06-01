import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    color: #23242a;
    font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  }

  a{
    color: #23242a;
  }
`;

export default GlobalStyle;
