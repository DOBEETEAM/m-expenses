import {useCallback, useEffect, useMemo} from 'react';
// @packages
import BootSplash from 'react-native-bootsplash';
// @types
import {UseLaunchProps} from './launch.type';
import {useTheme} from '@shared/hooks';
import {ViewStyle} from '@data/models';

export function useLaunchModel({navigation}: UseLaunchProps) {
  const initialApp = useCallback(async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTab'}],
    });
  }, [navigation]);

  useEffect(() => {
    initialApp().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
}

export function useLaunchStyle() {
  const {theme} = useTheme();

  const screenContainerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.white,
    }),
    [theme],
  );

  return {
    screenContainerStyle,
  };
}
