import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    font-size: 62.5%;
    color: #23242a;
    font-family: 'Source Sans Pro', 'Roboto', sans-serif;
  }

  a{
    color: #23242a;
  }

  p{
    font-size: 1.1rem;
    line-height: 2rem;
  font-weight: 400;
  }
`;

export default GlobalStyle;
