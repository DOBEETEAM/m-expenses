import {LANGUAGES, LANGUAGE_CODE} from '../i18n.constant';
import vi_common from './vi/common.json';
import en_common from './en/common.json';

export default {
  [LANGUAGES[LANGUAGE_CODE.VI].VALUE]: {
    common: vi_common,
  },
  [LANGUAGES[LANGUAGE_CODE.EN].VALUE]: {
    common: en_common,
  },
};
