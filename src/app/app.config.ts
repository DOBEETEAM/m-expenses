import {Dimensions, Platform} from 'react-native';
import {LANGUAGES, LANGUAGE_CODE} from 'i18n';

export const appConfig = {
  appCode: '',
  appName: '',

  get defaultLanguage() {
    return LANGUAGES[LANGUAGE_CODE.VI].VALUE;
  },

  device: {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
};