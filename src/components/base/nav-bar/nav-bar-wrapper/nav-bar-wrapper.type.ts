import {ViewStyle} from '@data/models';
import {Children} from '@components/base/base.type';
import {ContainerProps} from '@components/base/container';

export interface NavBarWrapperProps extends ContainerProps {
  primary?: boolean;
  appNavBar?: boolean;
  containerStyle?: ViewStyle;

  children?: Children;
}
