import React from 'react';
import {KeyboardAvoidingView, Keyboard} from 'react-native';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// @types
import {SignUpProps} from './sign-up.type';
import {TypographyType} from '@resources';
// @configs
import {appConfig} from '@app';
// @hooks
import {useTheme} from '@shared';
import {useSignUp, useSignUpStyle} from './sign-up.hook';
// @components
import {
  NavBar,
  ScreenWrapper,
  Typography,
  Container,
  Button,
  Icon,
} from '@components/base';
import {AuthForm} from '@components/auth-form';
// @styles
import {styles} from './sign-up.style';

const _SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const {signUpSchema, handleSubmit, handleNavigationSignIn} = useSignUp({
    navigation,
  });
  const {containerStyle, signUpGoogleButtonStyle} = useSignUpStyle();

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

          <Typography
            style={{textAlign: 'center'}}
            type={TypographyType.CAPTION}>
            Or with
          </Typography>

          <Button
            style={[styles.signUpGoogleButton, signUpGoogleButtonStyle]}
            renderTitleComponent={() => (
              <Container row>
                <Icon name={'logo-google'} style={styles.iconStyle} />
                <Typography type={TypographyType.LABEL_LARGE}>
                  Sign Up with Google
                </Typography>
              </Container>
            )}
          />

          <Container row centerHorizontal style={{marginTop: 5}}>
            <Typography type={TypographyType.CAPTION}>
              Already have an account?
            </Typography>

            <Button
              style={{marginLeft: 5}}
              onPress={handleNavigationSignIn}
              typoProps={{type: TypographyType.LABEL_MEDIUM_PRIMARY}}>
              Sign In
            </Button>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export const SignUp = React.memo(_SignUp);
