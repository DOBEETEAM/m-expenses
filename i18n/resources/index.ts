import {LANGUAGES, LANGUAGE_CODE} from '../i18n.constant';
import vi_common from './vi/common.json';
import en_common from './en/common.json';
import vi_theme from './vi/theme.json';
import en_theme from './en/theme.json';

export default {
  [LANGUAGES[LANGUAGE_CODE.VI].VALUE]: {
    common: vi_common,
    theme: vi_theme,
  },
  [LANGUAGES[LANGUAGE_CODE.EN].VALUE]: {
    common: en_common,
    theme: en_theme,
  },
};
