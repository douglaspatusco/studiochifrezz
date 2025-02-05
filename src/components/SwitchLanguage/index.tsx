import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { SwitchLanguageContainer, Switch, Slider } from "./styles"

const SwitchLanguage = () => {
  const router = useRouter()
  const [isEnglish, setIsEnglish] = useState(false)

  // Carrega o idioma do localStorage após a montagem do componente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") === "en"
      setIsEnglish(storedLanguage)
    }
  }, [])

  // Atualiza o idioma no localStorage e no Next.js quando mudar o estado
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newLocale = isEnglish ? "en" : "pt"
      const storedLanguage = localStorage.getItem("language")

      if (storedLanguage !== newLocale) {
        localStorage.setItem("language", newLocale)
        if (router.locale !== newLocale) {
          router.replace(router.pathname, router.asPath, { locale: newLocale })
        }
      }
    }
  }, [isEnglish])

  const handleToggle = () => {
    setIsEnglish((prev) => !prev)
  }

  return (
    <SwitchLanguageContainer $isEN={isEnglish}>
      <Switch>
        <input
          type="checkbox"
          checked={isEnglish}
          onChange={handleToggle}
          aria-checked={isEnglish}
          aria-label="Switch language"
        />
        <Slider $isEN={isEnglish} />
      </Switch>
    </SwitchLanguageContainer>
  )
}

export default SwitchLanguage
