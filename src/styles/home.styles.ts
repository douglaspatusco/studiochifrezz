import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 20vh;
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
    width: 100vw;
    height: auto;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    pointer-events: none;

    position: absolute;
    top: 0;
    left: 0;
  }
`
