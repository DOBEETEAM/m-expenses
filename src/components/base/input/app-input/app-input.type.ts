import {TextStyle, ViewStyle} from '@data/models';
import {InputProps} from '../input.type';
import {BundleIcon} from '../../icon';

export interface AppInputProps extends InputProps {
  iconRightBundle?: BundleIcon;
  iconRightName?: string;
  iconRightStyle?: TextStyle;
  iconRightOnPress?: () => void;

  iconLeftBundle?: BundleIcon;
  iconLeftOnPress?: () => void;
  iconLeftName?: string;
  iconLeftStyle?: TextStyle;

  containerStyle?: ViewStyle;
}
