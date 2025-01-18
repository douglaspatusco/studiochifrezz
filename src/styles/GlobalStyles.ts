import { createGlobalStyle } from "styled-components";

export const colors = {
    cinzaChumbo: '#333333',
    lavandaSuave: '#6767a8',
    roxoPastel: '#9a9ad1',
    cinzaMedio: '#b0b0d3',
    azulClaro: '#ccccff',
    branco: '#ffffff',
}

const GlobalStyles = createGlobalStyle`
    html,
    body {
    overflow-x: hidden;
    }

    body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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