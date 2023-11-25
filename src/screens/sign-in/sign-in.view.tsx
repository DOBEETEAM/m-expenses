import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';
// @packages

// @types
import {SignInProps} from './sign-in.type';
import {TypographyType} from '@resources/theme';
// @configs
import {appConfig} from '@app/app.config';
// @hooks
import {useApiRequestor, useTheme} from '@shared/hooks';
import {useSignIn} from './sign-in.hook';
// @styles
import {styles} from './sign-in.style';
// @components
import {
  AppInput,
  BundleIconSetName,
  Button,
  ButtonRoundedType,
  Container,
  FilledButton,
  ScreenWrapper,
  Typography,
} from '@components/base';

const _SignIn: React.FC<SignInProps> = ({navigation}) => {
  const {theme} = useTheme();
  const {formik, securityPassword, handleNavigateSignUp, handleToggleHidePassword} = useSignIn({
    navigation,
  });

  return (
    <ScreenWrapper safeTopLayout style={{backgroundColor: theme.color.surface}}>
      <KeyboardAvoidingView
        behavior={appConfig.device.isIOS ? 'padding' : 'height'}>
        <Container noBackground style={styles.logoContainer}>
          <Image
            source={require('@assets/logo/icon-android-legacy.png')}
            style={styles.imageContainer}
          />
        </Container>

        <Container noBackground centerVertical style={styles.containerForm}>
          <Typography
            type={TypographyType.TITLE_HUGE}
            style={{fontWeight: 'bold'}}>
            Hello!
          </Typography>
          <Typography
            type={TypographyType.LABEL_SEMI_MEDIUM}
            style={{marginVertical: 10}}>
            Let's sign in to continue.
          </Typography>

          <AppInput
            onChangeText={formik.handleChange('email')}
            value={formik.values['email']}
            placeholder="Email"
            containerStyle={{marginVertical: 12}}
          />

          <AppInput
            iconRightOnPress={handleToggleHidePassword}
            iconRightBundle={BundleIconSetName.IONICONS}
            iconRightName={securityPassword ? 'eye-off-outline' : 'eye-outline'}
            iconRightStyle={{marginRight: 15, color: theme.color.placeholder}}
            secureTextEntry={securityPassword}
            onChangeText={formik.handleChange('password')}
            value={formik.values['password']}
            placeholder="Password"
            containerStyle={{marginVertical: 12}}
          />

          <FilledButton
            rounded={ButtonRoundedType.LARGE}
            primary
            renderTitleComponent={() => {
              return (
                <Typography type={TypographyType.BUTTON_TEXT}>
                  Sign In
                </Typography>
              );
            }}
            style={{paddingVertical: 15, marginVertical: 15}}
          />

          <Container center noBackground style={{marginTop: 15}}>
            <Button typoProps={{type: TypographyType.LABEL_MEDIUM_PRIMARY}}>
              Forgot password?
            </Button>

            <Container row style={{marginTop: 20}}>
              <Typography
                type={TypographyType.LABEL_MEDIUM}
                style={{marginRight: 5}}>
                Don't have an account yet?
              </Typography>

              <Button
                onPress={handleNavigateSignUp}
                typoProps={{type: TypographyType.LABEL_MEDIUM_PRIMARY}}>
                Sign Up
              </Button>
            </Container>
          </Container>
        </Container>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export const SignIn = React.memo(_SignIn);
