import {AppRegistry} from 'react-native';
// @configs
import initI18n from 'i18n';
import {appConfig} from '@app';
// @components
import App from '@app';
// @others
import {name as appName} from './app.json';

initI18n(appConfig.defaultLanguage);

AppRegistry.registerComponent(appName, () => App);
