import styled from 'styled-components'
import Image from 'next/image'
import { colors, screenSizes } from '@/styles/GlobalStyles'

// [index.tsx]

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
  padding: 4em 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    padding-top: 1em;
    color: ${colors.cinzaChumbo};
  }
`

export const ProjectsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;
  width: 64em;
  margin: 2em 0;
`

export const Card = styled.li`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 0.5em;

  &:hover {
    transition: 0.5s;
    transform: scale(1.025);
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  }
`

export const Picture = styled(Image)`
  width: 16em;
  height: auto;
  border-radius: 0.5em;
  object-fit: cover;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`

// [project.tsx] ---------------------------------------------------

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
  padding: 8em 16em;

  img {
    max-width: 90%;
    height: auto;
    border-radius: 0.5em;
    object-fit: cover;
    cursor: pointer;
    transition: .3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: calc(50% - 4em);
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  background: ${colors.branco};
  padding: 1.25em;
  border-radius: 0.5em;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    object-fit: cover;
  }

  button.closeButton {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 0.25em;
    border: none;
    font-size: 1.25em;
    color: #000;
    background: transparent;
    cursor: pointer;
  }
`

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 2em;
  cursor: pointer;
  z-index: 1001;
  fill: ${colors.roxoClaro};

  &.left {
    left: -10%;
    top: 50%;  }

  &.right {
    right: -10%;
    top: 50%;
  }

  svg {
    width: 100px;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }
  }
`

export const Support =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 8em;

  img {
    width: 100%;
    height: auto;
  }
`
