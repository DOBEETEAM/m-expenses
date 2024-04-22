import {ScrollViewProps as RNScrollViewProps} from 'react-native';
// @types
import {Children} from '../base.type';

export interface ScrollViewProps extends RNScrollViewProps {
  safeLayout?: boolean;
  safeTopLayout?: boolean;
  reanimated?: boolean;
  animated?: boolean;
  useGestureHandler?: boolean;
  noBackground?: boolean;

  children?: Children;
}
