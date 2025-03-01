import { colors, screenSizes } from "@/styles/GlobalStyles"
import styled from "styled-components"

export const WWDContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
  margin: 8em 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 0 4em;
  list-style: none;

  @media (max-width: ${screenSizes.mobileL}) {
    padding: 0 2em;
    gap: 4em;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  gap: 0.5em;

  div {
    display: flex;
    border-radius: 0.25em;
    background-color: ${colors.roxoClaro};
    transition: 2s;

    &:hover {
      background-color: ${colors.roxoEscuro};

      img {
        filter: invert(1);
        transition: 0.5s;
      }
    }
  }

  p {
    text-align: left;
  }
`

export const Icon = styled.img`
  width: 96px;
  height: auto;
  padding: 0.25em;
`
