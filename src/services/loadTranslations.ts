import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const loadTranslations = async (
  locale: string,
  namespaces: string[]
) => {
  return {
    ...(await serverSideTranslations(locale ?? 'pt', namespaces))
  }
}
