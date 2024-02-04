import {useCallback, useEffect, useMemo} from 'react';
// @packages
import BootSplash from 'react-native-bootsplash';
// @types
import {UseLaunchProps} from '@screens/launch';
import {useTheme} from '@shared/hooks';
import {ViewStyle} from '@data/models';
// @hooks
import {useAppSelector} from '@app/hooks';
// @others
import {appSelector} from '@features/app';

export function useLaunchModel({navigation}: UseLaunchProps) {
  const {isAppIntro, isLoggedIn} = useAppSelector(appSelector);

  const checkFirstTimeIntro = useCallback(() => {
    if (!isAppIntro) {
      return false;
    }

    navigation.replace('AppIntro');
    return true;
  }, [isAppIntro, navigation]);

  const checkAuth = useCallback(() => {
    if (checkFirstTimeIntro()) {
      return;
    }

    if (isLoggedIn) {
      navigation.replace('BottomTab');
      return;
    }

    navigation.replace('SignIn');
  }, [checkFirstTimeIntro, isLoggedIn, navigation]);

  const initialApp = useCallback(async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    checkAuth();
  }, [checkAuth]);

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
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  return {
    screenContainerStyle,
  };
}
