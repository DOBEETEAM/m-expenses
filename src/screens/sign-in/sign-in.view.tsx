import React from 'react';
import {Image} from 'react-native';
// @types
import {SignInProps} from './sign-in.type';
import { TypographyType } from '@resources/theme';
// @styles
import {styles} from './sign-in.style';
// @components
import {Container, ScreenWrapper, Typography} from '@components/base';

const _SignIn: React.FC<SignInProps> = () => {
  return (
    <ScreenWrapper safeTopLayout>
      <Container noBackground style={styles.logoContainer}>
        <Image
          source={require('@assets/logo/icon-android-legacy.png')}
          style={styles.imageContainer}
        />
      </Container>

      <Typography type={TypographyType.TITLE_HUGE} style={{fontWeight: 'bold'}} > Hello! </Typography>
      <Typography type={TypographyType.LABEL_SEMI_MEDIUM} style={{marginVertical: 10}} > Let's sign in to continue. </Typography>
    </ScreenWrapper>
  );
};

export const SignIn = React.memo(_SignIn);
