import {useCallback, useMemo, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
// @types
import {AppStackParamList} from '@data/models';
import {UseHomeProps} from './home.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @styles
import {styles} from './home.style';

export function useHome() {
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();
  const [isRefreshing, setRefreshing] = useState(false);

  const handleOpenNotify = useCallback(() => {
    navigate('Notification');
  }, [navigate]);

  const handleRefreshing = useCallback(() => {
    setRefreshing(true);
  }, []);

  return {
    isRefreshing,
    handleRefreshing,
    handleOpenNotify,
  };
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
      borderBottomLeftRadius: theme.layout.borderRadiusGigantic,
      borderBottomRightRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

  return {btnMonthStyle, linearContainerStyle};
}
