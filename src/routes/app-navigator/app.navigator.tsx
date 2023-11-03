import React, {useMemo} from 'react';
// @packages
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
// @types
import {AppStackParamList} from '@data/models';
// @hooks
import {useTheme} from '@shared/hooks';
// @navigation
import {BottomTabNavigator} from './bottom-tabs';
// @components
import {Launch} from '@screens';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  const {theme} = useTheme();

  const screenOptions: NativeStackNavigationOptions = useMemo(() => {
    return {
      headerShown: false,
      contentStyle: {
        backgroundColor: theme.color.background,
      },
    };
  }, [theme]);

  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Launch" component={Launch} />

      <AppStack.Screen name={'BottomTab'} component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}
