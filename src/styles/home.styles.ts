import { colors, screenSizes } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20vh;
  background-color: ${colors.branco};
`

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: auto;
  margin-top: 20vh;
  padding: 4em 0 1em 0;

  @media (max-width: ${screenSizes.tablet}) {
    margin-top: 0vh;
    padding: 2em 0 1em 0;
  }
`

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100%;
  text-align: center;
  position: relative;

  @media (max-width: ${screenSizes.mobileL}) {
    align-items: flex-start;
    justify-content: center;
    margin: 2em 0 10em 0;

    padding: 0 1em 0 1em;
    width: 100%;
  }

  img {
    width: 10em;
    height: auto;

    &.kale {
      width: 11em;

      @media (max-width: ${screenSizes.mobileL}) {
        width: 6em;

        position: absolute;
        top: 48px;
        right: 80px;
      }

      @media (max-width: ${screenSizes.mobileS}) {
        right: 60px;
      }
    }

    &.kiza {
      @media (max-width: ${screenSizes.mobileL}) {
        width: 6em;

        position: absolute;
        top: 48px;
        left: 80px;
      }

      @media (max-width: ${screenSizes.mobileS}) {
        left: 60px;
      }
    }
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
    display: flex;
    justify-content: center;
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
  }
`
