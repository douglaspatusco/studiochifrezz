import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Title = styled.h1`
    color: ${colors.branco};
    font-size: 1.5em;
    letter-spacing: 4px;
`

export const FirstLetter = styled.span`
    font-size: 1.25em;
`