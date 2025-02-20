import styled from 'styled-components'
import { screenSizes, colors } from './GlobalStyles'

export const ContainerProduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${screenSizes.ultrawide};
  width: 100%;
  height: 100%;

  h1 {
    color: ${colors.cinzaChumbo};
    font-size: 2em;
  }

  @media screen and (max-width: ${screenSizes.laptop}) {
    img {
    }
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4em;
  width: 100%;
  padding: 0 4em;
  margin: 4em 0;
`
export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 0.5em;
`

export const TechnicalSheet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 0.5em;
  width: fit-content;
  font-family: 'Austral Slab';

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 2em;
    letter-spacing: 4px;
  }
`

export const Credits = styled.div`
  display: flex;
  gap: 2em;
  min-width: max-content;

  h1 {
    font-size: 1.5em;
  }
`

export const Role = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25em;

  h3 {
    font-size: 1.25em;
    letter-spacing: 1px;
  }
`

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;

  h3 {
    font-size: 1.25em;
    font-weight: 400;
    letter-spacing: 1px;
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
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  flex: 1 1 calc(50% - 2em);
  max-width: calc(50% - 2em);
`

export const Support = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 8em;
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
      transform: scale(0.9);
    }
  }
`
