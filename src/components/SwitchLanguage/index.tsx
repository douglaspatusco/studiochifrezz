import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { SwitchLanguageContainer, Switch, Slider } from "./styles"

const SwitchLanguage = () => {
  const router = useRouter()
  const [isEnglish, setIsEnglish] = useState(false)
  const [translations, setTranslations] = useState<{ [key: string]: string } | null>(null)

  // Função para carregar as traduções
  const loadTranslations = async (locale: string) => {
    const cachedData = localStorage.getItem(`translations_${locale}`)

    if (cachedData) {
      setTranslations(JSON.parse(cachedData))
    } else {
      try {
        const response = await fetch(`/locales/${locale}.json`)
        const data = await response.json()
        localStorage.setItem(`translations_${locale}`, JSON.stringify(data))
        setTranslations(data)
      } catch (error) {
        console.error("Erro ao carregar traduções:", error)
      }
    }
  }

  // Carrega o idioma do localStorage após a montagem do componente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") === "en"
      setIsEnglish(storedLanguage)
      loadTranslations(storedLanguage ? "en" : "pt")
    }
  }, [])

  // Atualiza o idioma no localStorage e no Next.js quando mudar o estado
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newLocale = isEnglish ? "en" : "pt"
      localStorage.setItem("language", newLocale)

      if (router.locale !== newLocale) {
        router.replace(router.pathname, router.asPath, { locale: newLocale })
      }

      loadTranslations(newLocale)
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
