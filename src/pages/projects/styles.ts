import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/GlobalStyles";


export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    transition: .5s;
    transform: scale(1.025);
  }
  `

export const Picture = styled(Image)`
  width: 16em;
  height: auto;
  border-radius: 0.5em;
  object-fit: cover;

  &:hover {
    transition: .5s;
    transform: scale(1.05);
  }
`
