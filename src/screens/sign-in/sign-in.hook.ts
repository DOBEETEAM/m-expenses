import {useCallback, useMemo, useState} from 'react';
// @packages
import {useFormik} from 'formik';
import * as Yup from 'yup';
// @types
import {ViewStyle} from '@data/models';
import {UseSignInProps} from '@screens/sign-in';
import {FormSchema} from '@components/auth-form';
// @hooks
import {useAppDispatch} from '@app/hooks';
import {useTheme} from '@shared/hooks';
// @others
import {setLoggedIn} from '@features/app';

export type FormValue = {
  email: string;
  password: string;
};

export function useSignIn({navigation}: UseSignInProps) {
  const [initialValues] = useState<FormValue>({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (values: FormValue) => {
    setLoading(true);
    try {
      if (values.email === 'dong@gmail.com' && values.password === '123456') {
        dispatch(setLoggedIn(true));
        navigation?.replace('Launch');
      }

      console.log(values);
    } catch (e) {
      console.log('sign_in_error: ', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleForgotPassword = useCallback(() => {
    navigation?.navigate('ForgotPassword');
  }, [navigation]);

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
    isLoading,
    signInSchema,
    handleNavigateSignUp,
    handleForgotPassword,
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
