import React from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';
// @packages
// @types
import {SignInProps} from './sign-in.type';
import {TypographyType} from '@resources/theme';
// @configs
import {appConfig} from '@app/app.config';
// @hooks
import {useTheme} from '@shared/hooks';
import {useSignIn, useSignInStyle} from './sign-in.hook';
// @components
import {
  Button,
  Container,
  ScreenWrapper,
  Typography,
  ActivityIndicator,
} from '@components/base';
import {AuthForm} from '@components/auth-form';
// @styles
import {styles} from './sign-in.style';

const _SignIn: React.FC<SignInProps> = ({navigation}) => {
  const {
    isLoading,
    signInSchema,
    handleNavigateSignUp,
    handleSubmit,
    handleForgotPassword,
  } = useSignIn({
    navigation,
  });
  const {containerStyle} = useSignInStyle();

  return (
    <ScreenWrapper safeTopLayout style={containerStyle}>
      {isLoading && (
        <Container center flex noBackground style={styles.containerLoading}>
          <ActivityIndicator size={'large'} />
        </Container>
      )}

      <KeyboardAvoidingView
        behavior={appConfig.device.isIOS ? 'padding' : 'height'}>
        <Container noBackground style={styles.logoContainer}>
          <Image
            source={require('@assets/logo/icon-android-legacy.png')}
            style={styles.imageContainer}
          />
        </Container>

        <Container noBackground centerVertical style={styles.containerForm}>
          <Typography type={TypographyType.TITLE_HUGE} style={styles.titleForm}>
            Hello!
          </Typography>
          <Typography
            type={TypographyType.LABEL_SEMI_MEDIUM}
            style={styles.descriptionForm}>
            Let's sign in to continue.
          </Typography>

          <AuthForm
            formSchema={signInSchema}
            buttonTitle="Sign In"
            onSubmit={handleSubmit}
          />

          <Container center noBackground style={{marginTop: 15}}>
            <Button
              typoProps={{type: TypographyType.LABEL_MEDIUM_PRIMARY}}
              onPress={handleForgotPassword}>
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
