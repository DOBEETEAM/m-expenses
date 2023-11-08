import React, {useMemo} from 'react';
import {StatusBar as RnStatusBar} from 'react-native';
// @types
import {StatusBarProps} from './status-bar.type';
// @helpers
import {isDarkTheme} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';

const _StatusBar: React.FC<StatusBarProps> = React.forwardRef(() => {
  const {theme} = useTheme();

  const barStyle = useMemo(() => {
    return isDarkTheme(theme) ? 'light-content' : 'dark-content';
  }, [theme]);

  return (
    <RnStatusBar
      backgroundColor="transparent"
      translucent
      barStyle={barStyle}
    />
  );
});

export const StatusBar = React.memo(_StatusBar);
