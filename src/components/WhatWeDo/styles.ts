import { colors, screenSizes } from "@/styles/GlobalStyles"
import styled from "styled-components"

export const WWDContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
  margin: 8em 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 50%;
  padding: 0 4em;
  list-style: none;

  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }

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
    border-radius: 0.125em;
    background-color: ${colors.roxoClaro};
  }

  p {
    text-align: left;
  }
`

export const ListItemReverse = styled(ListItem)`
  flex-direction: row-reverse;

  p {
    text-align: right;
  }
`


export const Icon = styled.img`
  width: 128px;
  height: auto;
  padding: 0.25em;
`