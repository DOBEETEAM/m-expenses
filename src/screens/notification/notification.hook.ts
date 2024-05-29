import {useTheme} from '@shared/hooks';
import {UseNotificationProps} from './notification.type';
import {useMemo} from 'react';

export function useNotification(props: UseNotificationProps) {}

export function useNotificationStyle() {
  const {theme} = useTheme();

  const iconMoreStyle = useMemo(
    () => ({
      fontSize: 25,
      color: theme.color.onSurface,
    }),
    [theme],
  );

  const containerStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
      paddingHorizontal: 15
    }),
    [theme],
  );

  return {
    containerStyle,
    iconMoreStyle,
  };
}
