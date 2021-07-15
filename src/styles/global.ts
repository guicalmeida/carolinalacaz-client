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

  ::-webkit-scrollbar{
    width: 8px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb{
    background: ${(props) => props.theme.colors.txt};
    border-radius: 30px;
  }

  ::-webkit-scrollbar-track{
    background: ${(props) => props.theme.colors.bg};
    border-radius: 10px;
  }
`

export default GlobalStyles
