// @types
import {useMemo} from 'react';
import {UseHomeProps} from './home.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @styles
import {styles} from './home.style';

export function useHome(props: UseHomeProps) {}

export function useHomeStyle() {
  const {theme} = useTheme();

  const btnMonthStyle = useMemo(
    () => ({
      ...styles.btnMonth,
      borderWidth: theme.layout.borderWidthSmall,
      borderColor: theme.color.border,
      borderRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

  return {btnMonthStyle};
}
