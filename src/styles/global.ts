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
    color: #373435
  }

  body{
    min-height: 100vh;
  }
`

export default GlobalStyles
