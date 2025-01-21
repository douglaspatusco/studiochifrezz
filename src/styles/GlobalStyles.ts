import { createGlobalStyle } from 'styled-components'

export const colors = {
  cinzaChumbo: '#333333',
  roxoEscuro: '#6767a8',
  roxoPastel: '#9a9ad1',
  roxoAcinzentado: '#b0b0d3',
  roxoClaro: '#ccccff',
  branco: '#ffffff',
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Candara';
    src: url('/Candara.ttf'), format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    overflow-x: hidden;
    font-family: 'Candara', sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyles
