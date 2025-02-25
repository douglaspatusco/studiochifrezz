import { colors, screenSizes } from '@/styles/GlobalStyles'
import Link from 'next/link'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 4em;
  justify-content: space-between;
  margin: 2rem 0;

  @media screen and (max-width: ${screenSizes.mobile}) {
    padding: 0 1em;
    gap: 1em;
  }
`

export const NavLink = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: ${colors.branco};
  background-color: ${colors.roxoPastel};
  border: 1px solid ${colors.cinzaClaro};
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: ${colors.roxoEscuro};
  }

  @media screen and (max-width: ${screenSizes.mobile}) {
    width: 100%;
    font-size: 1em;
  }
`
