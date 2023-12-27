import React, {useState} from 'react';
import {KeyboardAvoidingView, Keyboard} from 'react-native';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// @types
import {SignUpProps} from './sign-up.type';
// @configs
import {appConfig} from '@app';
// @hooks
import {useSignUp, useSignUpStyle} from './sign-up.hook';
// @components
import {NavBar, ScreenWrapper, Typography} from '@components/base';
import {AuthForm} from '@components/auth-form';
// @styles
import {styles} from './sign-up.style';

const _SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const {signUpSchema, handleSubmit} = useSignUp({navigation});
  const {containerStyle} = useSignUpStyle();

  return (
    <ScreenWrapper style={containerStyle}>
      <NavBar title="Sign Up" primary={false} noBackground />

      <KeyboardAvoidingView
        style={styles.containerContent}
        behavior={appConfig.device.isIOS ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <AuthForm
            buttonTitle="Sign Up"
            formSchema={signUpSchema}
            onSubmit={handleSubmit}
          />

          
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export const SignUp = React.memo(_SignUp);
