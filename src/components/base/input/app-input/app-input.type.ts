import {TextStyle, ViewStyle} from '@data/models';
import {InputProps} from '../input.type';
import {BundleIcon} from '../../icon';

export interface AppInputProps extends InputProps {
  iconLeftBundle?: BundleIcon;
  iconLeftName?: string;
  iconLeftStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
