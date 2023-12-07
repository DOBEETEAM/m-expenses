import {useCallback, useMemo, useState} from 'react';
// @packages
import {useFormik} from 'formik';
import * as Yup from 'yup';
// @types
import {ViewStyle} from '@data/models';
import {UseSignInProps} from './sign-in.type';
import {FormSchema} from '@components/auth-form';
// @hooks
import {useTheme} from '@shared/hooks';

export type FormValue = {
  email: string;
  password: string;
};

export function useSignIn({navigation}: UseSignInProps) {
  const [initialValues] = useState<FormValue>({
    email: '',
    password: '',
  });

  const handleSignIn = useCallback(async (values: FormValue) => {
    console.log(values);
  }, []);

  const handleNavigateSignUp = useCallback(() => {
    navigation?.navigate('SignUp');
  }, [navigation]);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required("Haven't entered your email yet")
          .email('must be a valid email'),
        password: Yup.string()
          .required("Haven't entered your password yet")
          .min(4),
      }),
    [],
  );

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: handleSignIn,
    validationSchema: validationSchema,
  });

  const signInSchema: FormSchema[] = [
    {
      fieldType: 'email',
      label: 'Email',
      value: values['email'],
      placeholder: 'Email',
      onChangeText: handleChange('email'),
      error: errors['email'],
    },
    {
      fieldType: 'password',
      label: 'Password',
      value: values['password'],
      placeholder: 'Password',
      onChangeText: handleChange('password'),
      error: errors['password'],
    },
  ];

  return {
    signInSchema,
    handleNavigateSignUp,
    handleSubmit,
  };
}

export function useSignInStyle() {
  const {theme} = useTheme();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  const iconInputRightStyle = useMemo(
    () => ({
      marginRight: 15,
      color: theme.color.placeholder,
    }),
    [theme],
  );

  return {
    containerStyle,
    iconInputRightStyle,
  };
}
