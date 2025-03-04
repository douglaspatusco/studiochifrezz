import { colors, screenSizes } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${screenSizes.desktopL}) {
    gap: 4em;
  }
`

export const CharsContainer = styled.div``

export const CharsImages = styled.img<{ position: string }>`
  width: auto;
  height: 12em;
  position: absolute;

  ${({ position }) =>
    position === 'top-left' &&
    'top: 0; left: 0; padding-left: 2em; padding-top: 2em;'}
  ${({ position }) =>
    position === 'top-right' &&
    'top: 0; right: 0; padding-right: 2em; padding-top: 2em;'}
  ${({ position }) =>
    position === 'bottom-left' &&
    'bottom: 0; left: 0; padding-left: 2em; padding-bottom: 2em;'}
  ${({ position }) =>
    position === 'bottom-right' &&
    'bottom: 0; right: 0; padding-right: 2em; padding-bottom: 2em;'}
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100vw;
  height: 80vh;
  padding: 1em;
  position: relative;
  background-color: ${colors.roxoQuaseBranco};

  h2 {
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    max-width: 640px;
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    gap: 4em;

    h2 {
      width: 100%;
      font-size: 1.25em;
      padding: 1em;
    }
  }
`

export const EventsImagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  img {
    width: 10em;
    height: auto;
  }
`

export const Us = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  max-width: 1024px;

  @media screen and (max-width: ${screenSizes.laptop}) {
    padding: 4em;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    padding: 2em;
  }
`

export const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  text-align: justify;

  a {
    display: inline-block;
    min-width: 16em;
    border-radius: 50%;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      border-radius: 50%;
      width: 100%;
      height: auto;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;

    a {
      display: flex;
      justify-content: center;

        img {
        width: 50%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    flex-direction: column;
    gap: 1em;
  }

  h2 {
    align-self: center;
  }

`

export const MemberReverse = styled(Member)`
  flex-direction: row-reverse;
  align-items: center;

  div {
    align-items: flex-end;
  }

    @media screen and (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;

    a {
      display: flex;
      justify-content: center;

        img {
        width: 50%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    flex-direction: column;
    gap: 1em;
    text-align: justify;

    h2 {
      align-self: center;
    }

    div {
      align-items: flex-start;
    }
  }
`
