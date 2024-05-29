import React, {useMemo} from 'react';
// @packages
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
// @types
import {AppStackParamList} from '@data/models';
// @hooks
import {useAppDispatch, useAppSelector} from '@app/hooks';
import {useTheme} from '@shared/hooks';
// @navigation
import {BottomTabNavigator} from './bottom-tabs';
// @components
import {
  AppIntro,
  Launch,
  SignIn,
  SignUp,
  ForgotPassword,
  CreateTransaction,
  Notification,
} from '@screens';
// @others
import {appSelector, toggleModalAddTransaction} from '@features/app';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  const dispatch = useAppDispatch();
  const {isOpenAddTransaction} = useAppSelector(appSelector);
  const {theme} = useTheme();

  const screenOptions: NativeStackNavigationOptions = useMemo(() => {
    return {
      headerShown: false,
      contentStyle: {
        backgroundColor: theme.color.background,
      },
    };
  }, [theme]);

  const screenListeners = useMemo(() => {
    return {
      state: () => {
        if (isOpenAddTransaction) {
          dispatch(toggleModalAddTransaction());
        }
      },
    };
  }, [isOpenAddTransaction, dispatch]);

  return (
    <AppStack.Navigator
      screenOptions={screenOptions}
      screenListeners={screenListeners}>
      <AppStack.Screen name="Launch" component={Launch} />

      <AppStack.Screen name="AppIntro" component={AppIntro} />
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name={'ForgotPassword'} component={ForgotPassword} />

      <AppStack.Screen name="CreateTransaction" component={CreateTransaction} />
      <AppStack.Screen name="Notification" component={Notification} />

      <AppStack.Screen name="BottomTab" component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}
