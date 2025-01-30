import { colors } from '@/styles/GlobalStyles'
import Link from 'next/link'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 4em;
  justify-content: space-between;
  margin: 2rem 0;
`

export const NavLink = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: ${colors.branco};
  background-color: ${colors.roxoPastel};
  border: 1px solid ${colors.cinzaClaro};
  border-radius: 5px;

  &:hover {
    background-color: ${colors.roxoEscuro};
  }
`
