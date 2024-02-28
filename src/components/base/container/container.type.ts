import {ViewProps} from 'react-native';
import {Children} from '../base.type';

export interface ContainerProps extends ViewProps {
  children?: Children | Children[];

  animated?: boolean;
  reanimated?: boolean;

  safeLayout?: boolean;
  safeTopLayout?: boolean;
  content?: boolean;
  noBackground?: boolean;
  shadow?: boolean;
  flex?: boolean;
  row?: boolean;
  center?: boolean;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
}
