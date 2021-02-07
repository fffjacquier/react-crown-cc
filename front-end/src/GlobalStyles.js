import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;

    @media screen and (max-width:800px) {
      padding: 10px;
    }
  }

  button {
    font-family: 'Open Sans Condensed', sans-serif;
  }

  a {
    text-decoration: none;
    color: #343536;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
