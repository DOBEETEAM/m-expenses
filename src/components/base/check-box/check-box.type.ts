import {CheckBoxProps as RNCheckBoxProps} from '@react-native-community/checkbox';
import {ViewStyle} from '@data/models';

export interface CheckBoxProps extends RNCheckBoxProps {
  onPress?: () => void;
  containerStyle?: ViewStyle;
}
