import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { SwitchLanguageContainer, Switch, Slider } from "./styles"

const SwitchLanguage = () => {
  const router = useRouter()

  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") === "en"
    }
    return false
  }

  const [isEnglish, setIsEnglish] = useState(getInitialLanguage)

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    const newLocale = isEnglish ? "en" : "pt";

    if (storedLanguage !== newLocale) {
      localStorage.setItem("language", newLocale);
      router.push(router.pathname, router.asPath, { locale: newLocale });
    }
  }, [isEnglish, router]);

  const handleToggle = () => {
    setIsEnglish((prev) => !prev);
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
