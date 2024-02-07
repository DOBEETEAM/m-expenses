import {useMemo} from 'react';
// @types
import {ViewStyle} from '@data/models';
// @hooks
import {useTheme} from '@shared';

export function useForgotPassword() {
  return {};
}

export function useForgotPasswordStyle() {
  const {theme} = useTheme();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  const continueButtonStyle: ViewStyle = useMemo(() => {
    return {
      borderRadius: theme.layout.borderRadiusSmall
    }
  }, [theme])

  return {
    containerStyle,
    continueButtonStyle
  };
}
