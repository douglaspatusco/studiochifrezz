import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 7.5em;
  background-color:#ababab;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  z-index: 0; /* Para ficar abaixo do conteúdo */

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 56.25vw; /* Proporção 16:9 */
    transform: translate(-50%, -50%);
    pointer-events: none; /* Desabilita a interação do player */
  }
`
