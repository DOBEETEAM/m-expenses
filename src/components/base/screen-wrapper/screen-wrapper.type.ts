import {ViewProps} from 'react-native';
// @types
import {Children} from '../base.type';

export interface ScreenWrapperProps extends ViewProps {
  safeLayout?: boolean;
  safeTopLayout?: boolean;
  noBackground?: boolean;

  headerComponent?: Children;
  children?: Children;
}
