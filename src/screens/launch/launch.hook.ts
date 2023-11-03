import {useCallback, useEffect} from 'react';
// @packages
import BootSplash from 'react-native-bootsplash';
// @types
import {UseLaunchProps} from './launch.type';

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

export function useLaunchStyle() {}
