import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { FC } from "react"

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = i18n.language === "pt" ? "en" : "pt"
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "pt" ? "Switch to English" : "Mudar para Português"}
    </button>
  )
}

export default LanguageSwitcher
