import { createGlobalStyle } from 'styled-components'

export const colors = {
  cinzaChumbo: '#333333',
  lavandaSuave: '#6767a8',
  roxoPastel: '#9a9ad1',
  cinzaMedio: '#b0b0d3',
  azulClaro: '#ccccff',
  branco: '#ffffff',
}

/* Candara (fonte do sistema) */
const GlobalStyles = createGlobalStyle`
    /* Candara (fonte do sistema) */
    @font-face {
        font-family: 'Candara';
        src: url('/Candara.ttf'), format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    html,
    body {
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
