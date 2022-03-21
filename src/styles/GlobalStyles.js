import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
body, html{
  height: 100%;
}

body{
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4{
  font-family: 'Roboto', sans-serif;
}

`

export default GlobalStyle;