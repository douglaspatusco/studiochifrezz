import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import useScrollOpacity from '@/hooks/useScrollOpacity'
import LogoAndName from '../LogoAndName'
import SwitchLanguage from '../SwitchLanguage'

import { HeaderBarContainer, ItemLink, Menu, MenuItem } from './styles'

const routes = [
  { path: '/', key: 'home' },
  { path: '/projects', key: 'projects' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' }
]

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null)
  const opacity = useScrollOpacity(200)
  const { t } = useTranslation('common')

  const handleMouseEnter = useCallback((index: number) => {
    setHovered(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(null)
  }, [])

  const headerStyle = useMemo(
    () => ({
      opacity,
      pointerEvents: (opacity === 0
        ? 'none'
        : 'auto') as React.CSSProperties['pointerEvents']
    }),
    [opacity]
  )

  return (
    <HeaderBarContainer style={headerStyle}>
      <SwitchLanguage />
      <LogoAndName />
      <Menu>
        {routes.map((route, index) => (
          <MenuItem
            key={route.key}
            $isHovered={hovered !== null && hovered !== index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={hovered === index}
          >
            <Link href={route.path} passHref legacyBehavior>
              <ItemLink href={route.path} aria-label={t(route.key)}>
                {t(route.key).toUpperCase()}
              </ItemLink>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </HeaderBarContainer>
  )
}

export default HeaderBar
