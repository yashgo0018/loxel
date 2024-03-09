import { LocaleType, locales } from "../config";
import useGlobalContext from "../contexts/globalContext";

export default function useLocale() {
  const globalContext = useGlobalContext();

  function set(locale: LocaleType) {
    const localEntry = locales.find((e) => e.locale === locale);

    if (!localEntry) return;

    globalContext.localeState.set(localEntry);
  }

  return { current: globalContext.localeState.value, set };
}
