import styled from 'styled-components'
import { screenSizes, colors } from './GlobalStyles'

export const ContainerProduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }

  h1 {
    color: ${colors.cinzaChumbo};
    font-size: 2em;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    img {
      width: 200%;
      height: auto;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    img {
      width: 200%;
      height: auto;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4em;
  padding: 4em 0;
  width: 100%;

  background-color: ${colors.roxoQuaseBranco};

  @media screen and (max-width: ${screenSizes.tablet}) {
    display: block;
    padding: 2em;
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    width: 100%;
    padding: 2em 1em;
  }
`

export const TechnicalSheet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;
  padding: 0.5em;
  font-family: 'Austral Slab';

  h1 {
    font-size: 4em;

    @media screen and (max-width: ${screenSizes.tablet}) {
      font-size: 3em;
    }
  }

  h2 {
    font-size: 2em;
    letter-spacing: 4px;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    flex-direction: row;
    align-items: center;

    h2 {
      font-size: 1.5em;
    }
  }

    @media screen and (max-width: ${screenSizes.mobileL}) {
    width: 100%;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 1.25em;
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 30vw;
  padding: 0.5em;
  border-radius: 0.5em;
  width: 36em;
  min-width: 30em;

  p {
    font-size: 1.25em;
    letter-spacing: 1px;
    line-height: 1.5em;
    text-align: justify;
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    width: 100%;
    align-items: center;
    margin: 6em 0 4em 0;

    p {
      font-size: 1em;
      width: 75%;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    min-width: 0;
    p {
      width: 100%;
    }
  }
`

export const NavigationButtons = styled.div`
  display: flex;
  gap: 2em;

  button {
    padding: 1em;
    border-radius: 0.5em;
    background-color: ${colors.branco};
    color: ${colors.cinzaChumbo};
    font-size: 1.25em;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${colors.roxoEscuro};
      color: ${colors.branco};
    }
  }
`

export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4em;
  width: 100%;
  max-width: ${screenSizes.ultrawide};
  padding: 8em 4em;

  img {
    max-width: 90%;
    height: auto;
    border-radius: 0.5em;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    padding: 4em 2em;
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    gap: 2em;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex: 1 1 calc(50% - 2em);
  max-width: calc(50% - 2em);

  @media screen and (max-width: ${screenSizes.mobileL}) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export const Support = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em 8em;

    h1 {
      font-size: 2em;
    }

  @media screen and (max-width: ${screenSizes.tablet}) {
    padding: 1em 2em;
  }

    @media screen and (max-width: ${screenSizes.mobileL}) {
    padding: 1em;
  }
`

export const SupportsImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    max-width: 25%;
    height: auto;
    object-fit: cover;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    gap: 0.5em;

    img {
      max-width: 20%;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    img {
      max-width: 40%;
    }
  }
`
