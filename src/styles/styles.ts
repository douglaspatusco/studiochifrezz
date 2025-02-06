import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 7.25em;
  background-color: ${colors.branco};
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
  width: 100%;
  height: 80vh;
  overflow: hidden;
  z-index: 0; /* Para ficar abaixo do conteúdo */

  video {
    position: absolute;
    top: 14em;
    left: 50%;
    width: 100vw;
    height: 56.25vw; /* Proporção 16:9 */
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`
