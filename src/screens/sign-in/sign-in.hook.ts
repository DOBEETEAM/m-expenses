import {useCallback, useState} from 'react';
// @packages
import {useFormik} from 'formik';
// @types
import {UseSignInProps} from './sign-in.type';

export function useSignIn({navigation}: UseSignInProps) {
  const [securityPassword, setSecurityPassword] = useState(true);
  const [initialValues] = useState({
    email: '',
    password: '',
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value) => {},
  });

  const handleNavigateSignUp = useCallback(() => {
    navigation?.navigate('SignUp');
  }, [navigation]);

  const handleToggleHidePassword = useCallback(() => {
    setSecurityPassword((prevState) => !prevState);
  }, []);

  return {
    initialValues,
    formik,
    securityPassword,
    handleNavigateSignUp,
    handleToggleHidePassword,
  };
}

export function useSignInStyle() {}
