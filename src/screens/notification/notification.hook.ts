import {useCallback, useMemo, useState} from 'react';
import {OptionsMore} from './notification.type';
import {ViewStyle} from '@data/models';
import {useTheme} from '@shared/hooks';

export function useNotification() {
  const [toggleModalNotify, setToggleModalNotify] = useState(false);

  const [optionsMore] = useState<OptionsMore[]>([
    {
      id: '1',
      title: 'Mark all read',
      onPress: () => {},
    },
    {
      id: '2',
      title: 'Remove all',
      onPress: () => {},
    },
  ]);

  const handleToggleModal = useCallback(() => {
    setToggleModalNotify(!toggleModalNotify);
  }, [toggleModalNotify]);

  return {
    optionsMore,
    toggleModalNotify,
    handleToggleModal,
  };
}

export function useNotificationStyle() {
  const {theme} = useTheme();

  const itemNotifyStyle: ViewStyle = useMemo(
    () => ({
      borderColor: theme.color.border,
      borderBottomWidth: theme.layout.borderWidthPixel,
    }),
    [theme],
  );

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
    }),
    [theme],
  );

  return {
    containerStyle,
    iconMoreStyle,
    itemNotifyStyle,
  };
}
