import {useCallback, useEffect} from 'react';
import {UseLaunchProps} from './launch.type';

export function useLaunchModel({navigation}: UseLaunchProps) {
  const init = useCallback(async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTab'}],
    });
  }, []);

  useEffect(() => {
    init();
  }, []);
}

export function useLaunchStyle() {}
