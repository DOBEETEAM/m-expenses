import {ViewStyle} from '@data/models';
import {Children} from '@components/base/base.type';

export interface AuthFormProps {
  formSchema?: FormSchema[];
  buttonTitle: string;
  containerFormStyle?: ViewStyle;

  onSubmit?: () => void;
}

export interface FormSchema {
  fieldType: 'email' | 'password' | string;
  label?: string;
  value: string | undefined;
  placeholder?: string;
  onChangeText?: (e: string) => void;
  error?: string;
}
