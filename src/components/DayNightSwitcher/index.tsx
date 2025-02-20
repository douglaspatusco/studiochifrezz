import { useState, useEffect } from 'react'
import { SwitchThemeContainer, Switch, Slider } from './styles'

const SwitchTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const body = document.querySelector('.container')
    if (body) {
      body.classList.toggle('dark', isDark)
    }
  }, [isDark])

  const handleToggle = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <SwitchThemeContainer isDark={isDark}>
      <Switch>
        <input type="checkbox" checked={isDark} onChange={handleToggle} />
        <Slider isDark={isDark} />
      </Switch>
    </SwitchThemeContainer>
  )
}

export default SwitchTheme
