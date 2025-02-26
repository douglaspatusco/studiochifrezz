import { colors, screenSizes } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20vh;
  background-color: ${colors.branco};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  margin-top: 40vh;
  padding: 4em 0 1em 0;

  @media (max-width: ${screenSizes.tablet}) {
    margin-top: 20vh;
    padding: 2em 0 1em 0;
  }

`

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 0;

  @media (max-width: ${screenSizes.tablet}) {
    position: unset;
  }

  @media (max-width: ${screenSizes.mobileS}) {
    position: unset;
  }

  video {
    width: 100%;
    height: auto;
    pointer-events: none;

    @media (max-width: ${screenSizes.mobileS}) {
      width: 150%;
    }
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
