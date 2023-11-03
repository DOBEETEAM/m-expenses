import React, {memo, useMemo} from 'react';
import {ActivityIndicator as RnActivityIndicator} from 'react-native';
// @types
import {ActivityIndicatorProps} from './activity-indicator.type';
// @hooks
import {useTheme} from '@shared/hooks';

const _ActivityIndicator = ({color, ...props}: ActivityIndicatorProps) => {
  const {theme} = useTheme();

  const colorValue = useMemo(() => {
    return color || theme.color.indicator;
  }, [theme, color]);

  return <RnActivityIndicator {...props} color={colorValue} />;
};

export const ActivityIndicator = memo(_ActivityIndicator);
