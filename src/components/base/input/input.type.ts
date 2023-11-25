import {TextInputProps} from 'react-native';
import {TypographyType} from '@resources/theme';

export interface InputProps extends TextInputProps {
  type?: TypographyType;
}
