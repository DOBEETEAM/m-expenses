import {ImageSourcePropType} from 'react-native';

export interface AppIntroProps {}

export type UseAppIntroProps = {};

export type SlideData = {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};
