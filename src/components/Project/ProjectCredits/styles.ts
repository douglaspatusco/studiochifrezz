import { screenSizes } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 2em 0.5em 6em 0.5em;

  @media screen and (max-width: ${screenSizes.tablet}) {

    h1 {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileS}) {
    width: 100%;
  }
`

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  min-width: max-content;

  h1 {
    font-size: 1.5em;

    @media screen and (max-width: ${screenSizes.tablet}) {
      font-size: 1em;
    }
  }

  @media screen and (max-width: ${screenSizes.mobileS}) {
    width: 100%;
  }
`

export const Role = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  h3 {
    font-size: 1.25em;
    letter-spacing: 1px;

    @media screen and (max-width: ${screenSizes.tablet}) {
      font-size: 1em;
    }
  }
`

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  h3 {
    font-size: 1.25em;
    font-weight: 400;
    letter-spacing: 1px;

    @media screen and (max-width: ${screenSizes.tablet}) {
      font-size: 1em;
    }
  }
`
