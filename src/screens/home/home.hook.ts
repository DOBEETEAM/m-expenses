// @types
import {useCallback, useMemo, useState} from 'react';
import {UseHomeProps} from './home.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @utils
import { hexToRgba } from '@utils/color';
// @styles
import {styles} from './home.style';

export function useHome() {
  const [isRefreshing, setRefreshing] = useState(false)

  const handleRefreshing = useCallback(() => {
    setRefreshing(true)
  }, [])

  return {
    isRefreshing,
    handleRefreshing
  }
}

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

  const linearContainerStyle = useMemo(
    () => ({
      // flex: 0.4,
      borderBottomLeftRadius: theme.layout.borderRadiusGigantic,
      borderBottomRightRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

  return {btnMonthStyle, linearContainerStyle};
}
