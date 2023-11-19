import {ImageSourcePropType} from 'react-native';
import {AppScreenProps} from '@data/models';

export interface AppIntroProps extends AppScreenProps<'AppIntro'> {}

export type UseAppIntroProps = {
  navigation?: AppIntroProps['navigation'];
};

export type SlideData = {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};
