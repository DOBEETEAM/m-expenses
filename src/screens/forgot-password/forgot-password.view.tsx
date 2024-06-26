import React from 'react';
// @types
import {TypographyType} from '@resources';
// @hooks
import {useForgotPasswordStyle} from './forgot-password.hook';
// @components
import {
  ScreenWrapper,
  NavBar,
  Typography,
  Container,
  AppInput,
  FilledButton,
} from '@components/base';

const _ForgotPassword = () => {
  const {containerStyle, continueButtonStyle} = useForgotPasswordStyle();

  return (
    <ScreenWrapper style={containerStyle}>
      <NavBar title="Forgot Password" primary={false} noBackground />

      <Typography
        type={TypographyType.TITLE_LARGE}
        style={{fontWeight: '600', marginHorizontal: 16, marginTop: 25}}>
        Don’t worry. Enter your email and we’ll send you a link to reset your
        password.
      </Typography>

      <Container style={{marginHorizontal: 20, marginTop: 25}}>
        <AppInput placeholder={'Email'} />

        <FilledButton
          title={'Continue'}
          primary
          style={[continueButtonStyle, {marginTop: 15, paddingVertical: 12}]}
          typoProps={{
            type: TypographyType.BUTTON_TEXT,
          }}
        />
      </Container>
    </ScreenWrapper>
  );
};

export const ForgotPassword = React.memo(_ForgotPassword);
