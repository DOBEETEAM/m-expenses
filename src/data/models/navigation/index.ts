// @packages
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
// @types
import {AppStackParamList} from './app.param-list';
import {BottomTabParamsList} from './bottom-tab.param-list';

export * from './app.param-list';
export * from './bottom-tab.param-list';

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AppBottomTabScreenProps<T extends keyof BottomTabParamsList> =
  BottomTabScreenProps<BottomTabParamsList, T>;
