import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { Stack } from "react-bootstrap"

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    const path = router.asPath
    const options = {
      locale: language,
    }

    router.push(path, path, options)
  }

  return (
    <Stack id="language-switch" data-testid="language-switcher" direction="horizontal" gap={3} className="ms-auto">
      <a
        href="#english"
        onClick={() => handleLanguageChange("en")}
        className={`ms-auto text-white ${router.locale === "en" ? "active-language-link" : ""}`}
        data-testid="link-english"
      >
        English
      </a>
      <div className="vr border opacity-100" />
      <a
        href="#japanese"
        onClick={() => handleLanguageChange("ja")}
        className={`me-auto text-white ${router.locale === "ja" ? "active-language-link" : ""}`}
        data-testid="link-japanese"
      >
        日本語
      </a>
    </Stack>
  )
}

export default LanguageSwitcher
