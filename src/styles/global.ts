import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior:smooth;
  }

  body{
    min-height: 100vh;
    color: ${(props) => props.theme.colors.txt};
    background-color: ${(props) => props.theme.colors.bg};
    transition: 300ms;

  }

  a, a:active, a:focus, a:visited{
    text-decoration: none;
    color: ${(props) => props.theme.colors.txt};
    transition: 300ms;

  }

  path{
    stroke: ${(props) => props.theme.colors.txt};
    transition: 300ms;

  }
`

export default GlobalStyles
