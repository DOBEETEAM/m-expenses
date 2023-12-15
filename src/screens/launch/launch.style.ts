import {StyleSheet} from 'react-native';
import { appConfig } from '@app';

export const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: appConfig.device.width / 2,
    marginBottom: appConfig.device.width / 2,
    width: 200,
    height: 200,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
});
