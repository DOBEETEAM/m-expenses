import {StyleSheet} from 'react-native';
import {appConfig} from '@app';
import {hexToRgba} from '@utils/color';

export const styles = StyleSheet.create({
  backdropContainer: {
    backgroundColor: hexToRgba('#fafafa', '0.2'),
    position: 'absolute',
    width: appConfig.device.width,
    height: appConfig.device.height,
    bottom: -120,
  },
  contentContainer: {
    position: 'absolute',
    zIndex: 999,
  },
});
