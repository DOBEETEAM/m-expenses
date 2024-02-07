import {useMemo, useState, useCallback} from 'react';
// @packages
import {useFormik} from 'formik';
import * as Yup from 'yup';
// @types
import {ViewStyle} from '@data/models';
import {UseSignUpProps} from '@screens/sign-up';
import {FormSchema} from '@components/auth-form';
// @hooks
import {useTheme} from '@shared/hooks';

export type FormValue = {
  name: string;
  email: string;
  password: string;
};

export function useSignUp({navigation}: UseSignUpProps) {
  const [agreed, setAgreed] = useState(false);
  const [initialValues] = useState<FormValue>({
    name: '',
    email: '',
    password: '',
  });

  const handleSignUp = useCallback(
    async (values: FormValue) => {
      console.log(values, agreed);
    },
    [agreed],
  );

  const handleNavigationSignIn = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required("Haven't entered your name yet."),
        email: Yup.string()
          .required("Haven't entered your email yet")
          .email('Must be a valid email'),
        password: Yup.string()
          .required("Haven't entered your password yet")
          .min(4),
      }),
    [],
  );

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: handleSignUp,
    validationSchema: validationSchema,
  });

  const signUpSchema: FormSchema[] = [
    {
      fieldType: 'name',
      label: 'Name',
      value: values['name'],
      placeholder: 'Full Name',
      onChangeText: handleChange('name'),
      error: errors['name'],
    },
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
    {
      fieldType: 'agreement',
      label: 'Agreement',
      isAgree: agreed,
      placeholder: 'By signing up, you agree to the',
      onChangeCheckbox: () => setAgreed(!agreed),
      placeholderTermsAgree: 'Terms of Service and Privacy Policy',
    },
  ];

  return {
    signUpSchema,
    handleSubmit,
    handleNavigationSignIn
  };
}

export function useSignUpStyle() {
  const {theme} = useTheme();

  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.color.surface,
    }),
    [theme],
  );

  const signUpGoogleButtonStyle: ViewStyle = useMemo(() => ({
    borderWidth: theme.layout.borderWidthSmall,
    borderColor: theme.color.border,
    borderRadius: theme.layout.borderRadiusSmall,
  }), [theme])

  return {
    containerStyle,
    signUpGoogleButtonStyle
  };
}
