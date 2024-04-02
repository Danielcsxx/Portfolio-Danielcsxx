import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    font-family: Roboto, sans-serif;
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

`;

export default GlobalStyles;
