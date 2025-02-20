import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const SwitchLanguageContainer = styled.div<{ $isEN: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
  scale: 0.8;
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 6em;
  height: 40px;

  input {
    display: none;
  }
`

export const Slider = styled.span<{ $isEN: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $isEN }) =>
    $isEN ? `${colors.roxoSombra}` : `${colors.roxoClaro}`};
  transition: 0.4s;
  border-radius: 2em;

  &::before {
    position: absolute;
    content: ${({ $isEN }) => ($isEN ? '"🇺🇸"' : '"🇧🇷"')};
    height: 40px;
    width: 40px;
    transition:
      transform 0.4s ease,
      background-color 0.4s ease;
    border-radius: 50%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white; /* Adiciona um fundo branco para destacar o emoji */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transform: ${({ $isEN }) => ($isEN ? 'translateX(56px)' : 'translateX(0)')};
  }
`
