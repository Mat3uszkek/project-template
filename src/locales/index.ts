import en from "./en.json"
import { createI18n } from "vue-i18n"

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { en },
  legacy: false
})

export default i18n
