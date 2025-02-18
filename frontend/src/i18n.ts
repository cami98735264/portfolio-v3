export async function loadTranslations(locale: string) {
  const translations = await import(`../locales/${locale}.json`);
  return translations.default;
}