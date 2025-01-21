import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/GlobalStyles";

// [index.tsx]

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;

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

// [project.tsx]

export const ContainerProduct = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 20em;

  h1 {
    color: ${colors.cinzaChumbo};
    font-size: 2em;
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  gap: 2em;
  width: 100%;
  padding: 0em 8em;
`
export const FichaTecnica = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 0.5em;
  border-radius: 0.5em;
  min-width: 45%;
`

export const TechnicalSheet = styled.div`
  display: flex;
  gap: 2em;
  width: 30vw;

  h1 {
    font-size: 1.5em;
  }
`

export const Role = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    font-size: 1.25em;
    letter-spacing: 1px;
  }
`

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

  p {
    font-size: 1.25em;
    letter-spacing: 1px;
  }
`
