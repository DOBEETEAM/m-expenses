import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// @constants
import resources from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

function initI18n(defaultLanguage: string) {
  i18n.use(initReactI18next).init(
    {
      compatibilityJSON: 'v3',
      lng: defaultLanguage,
      fallbackLng: defaultLanguage,
      returnNull: false,
      debug: false,
      returnObjects: true,
      interpolation: {
        escapeValue: false,
      },
      resources,
      ns: ['common'],
      defaultNS: 'common',
    }
  );
}

export default initI18n;
