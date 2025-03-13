import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SwitchLanguageContainer, Switch, Slider } from './styles'

const SwitchLanguage = ({ className}: { className?: string}) => {
  const router = useRouter()

  // Define um estado inicial fixo para evitar erro de hidratação
  const [isEnglish, setIsEnglish] = useState(router.locale === 'en')
  const [translations, setTranslations] = useState<{
    [key: string]: string
  } | null>(null)
  const [isClient, setIsClient] = useState(false) // Garante que só muda no cliente

  // Após o carregamento do cliente, ajusta o idioma corretamente
  useEffect(() => {
    setIsClient(true)

    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      setIsEnglish(storedLanguage === 'en')
      loadTranslations(storedLanguage)
    } else {
      // Se não houver idioma salvo, usar o do Next.js
      loadTranslations(router.locale || 'pt')
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      const newLocale = isEnglish ? 'en' : 'pt'
      localStorage.setItem('language', newLocale)

      if (router.locale !== newLocale) {
        router.replace(router.pathname, router.asPath, { locale: newLocale })
      }

      loadTranslations(newLocale)
    }
  }, [isEnglish, isClient])

  const loadTranslations = async (locale: string) => {
    try {
      const cachedData = localStorage.getItem(`translations_${locale}`)
      if (cachedData) {
        setTranslations(JSON.parse(cachedData))
      } else {
        const response = await fetch(`/locales/${locale}/common.json`)
        const data = await response.json()
        localStorage.setItem(`translations_${locale}`, JSON.stringify(data))
        setTranslations(data)
      }
    } catch (error) {
      console.error('Erro ao carregar traduções:', error)
    }
  }

  const handleToggle = () => {
    setIsEnglish((prev) => !prev)
  }

  return (
    <SwitchLanguageContainer $isEN={isEnglish} className={className}>
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
