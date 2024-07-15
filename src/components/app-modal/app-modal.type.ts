import {ViewStyle} from '@data/models';
import {Children} from '@components/base';

export interface AppModalProps {
  isVisible: boolean;
  children: Children;
  onCloseModal: () => void;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  useContainer?: boolean;
}
