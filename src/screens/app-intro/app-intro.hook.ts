import {useCallback, useEffect, useState, useMemo} from 'react';
// @types
import {UseAppIntroProps} from './app-intro.type';
import {ViewStyle} from '@data/models';
// @hooks
import {useTheme} from '@shared/hooks';
import {useAppDispatch} from '@app/hooks';
// @others
import {setAppIntro} from '@features/app';

export function useAppIntro({navigation}: UseAppIntroProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useAppDispatch();

  const handleIndexSwipeSlide = useCallback((index: number) => {
    setSlideIndex(index);
  }, []);

  const handleNavigateSignIn = useCallback(() => {
    navigation?.replace('SignIn');
  }, [navigation]);

  const handleNavigateSignUp = useCallback(() => {
    navigation?.replace('SignUp');
  }, [navigation]);

  useEffect(() => {
    dispatch(setAppIntro(false));
  }, [dispatch]);

  return {
    slideIndex,
    handleIndexSwipeSlide,
    handleNavigateSignIn,
    handleNavigateSignUp,
  };
}

export function useAppIntroStyle() {
  const {theme} = useTheme();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  const containerSlidesStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  return {
    containerStyle,
    containerSlidesStyle,
  };
}
