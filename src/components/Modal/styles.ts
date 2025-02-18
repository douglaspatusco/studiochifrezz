import { colors, screenSizes } from "@/styles/GlobalStyles";
import styled from "styled-components";

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
  overflow: hidden; /* Garante que nada fique fora da tela */
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${colors.branco};
  padding: 1.25em;
  border-radius: 0.5em;
  width: 90%;
  height: auto;
  box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
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

  @media screen and (max-width: ${screenSizes.laptop}) {
    width: 80vw;
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
  z-index: 1100; /* Aumentado para garantir que fique acima da imagem */
  fill: ${colors.roxoClaro};

  &.left {
    left: -96px; /* Antes estava -5%, pode estar fora da tela */
  }

  &.right {
    right: -96px;
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
`;
