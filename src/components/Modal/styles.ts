import styled from 'styled-components'
import { colors, screenSizes } from '@/styles/GlobalStyles'

export const ModalContainer = styled.div`
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
  overflow: hidden;
`

export const ModalContent = styled.div`
  position: relative;
  background: ${colors.branco};
  padding: 1.25em;
  border-radius: 0.5em;
  width: 90vw;
  height: 80vh;
  box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.5em;
    object-fit: contain;
  }

  button.closeButton {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0.5em;
    width: 2em;
    height: 2em;
    border: none;
    font-size: 1em;
    color: #000;
    background: ${colors.branco};
    cursor: pointer;
    z-index: 1100;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);

    &:hover {
      background: ${colors.roxoClaro};
      color: ${colors.branco};
    }
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
  z-index: 1100;
  fill: ${colors.roxoClaro};

  &.left {
    left: -64px;
  }

  &.right {
    right: -64px;
  }

  svg {
    width: 64px; /* Ajustei o tamanho */
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1);
    }
  }

  @media screen and (max-width: ${screenSizes.laptop}) {
    &.left {
      left: -64px;
    }

    &.right {
      right: -64px;
    }
  }

  @media screen and (max-width: ${screenSizes.tablet}) {
    &.left {
      left: -52px;
    }

    &.right {
      right: -52px;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileL}) {
    &.left {
      left: 0px;
    }

    &.right {
      right: 0px;
    }
  }
`
