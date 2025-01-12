import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from './locale-codes';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`./locales/${locale}.js`)
}); 