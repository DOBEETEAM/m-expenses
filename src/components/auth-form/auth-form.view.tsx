import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// @types
import {AuthFormProps} from './auth-form.type';
import {ButtonRoundedType} from '@components/base';
import {TypographyType} from '@resources/theme';
// @constants
import {BundleIconSetName} from '@components/base';
// @components
import {AppInput, Container, FilledButton, Typography} from '@components/base';

import {useTheme} from '@shared/hooks';

export const styles = StyleSheet.create({
  container: {},
  input: {
    marginVertical: 12,
  },
  buttonSubmit: {
    paddingVertical: 15,
    marginVertical: 15,
  },
});

const _AuthForm: React.FC<AuthFormProps> = ({
  renderForm,
  formSchema,
  buttonTitle,
  containerFormStyle,

  ...props
}) => {
  const {theme} = useTheme();
  const [securityPassword, setSecurityPassword] = useState(true);

  const handleToggleHidePassword = useCallback(() => {
    setSecurityPassword((prevState) => !prevState);
  }, []);

  const containerForm = useMemo(() => {
    return [styles.container, containerFormStyle];
  }, [containerFormStyle]);

  const iconInputRightStyle = useMemo(
    () => ({
      marginRight: 15,
      color: theme.color.placeholder,
    }),
    [theme],
  );

  const renderBaseForm = useCallback(() => {
    return formSchema.map((form, index) => {
      switch (form.fieldType) {
        case 'email':
          return (
            <AppInput
              key={index}
              onChangeText={form.onChangeText}
              value={form.value}
              placeholder={form.placeholder}
              containerStyle={styles.input}
            />
          );
        case 'password':
          return (
            <AppInput
              key={index}
              value={form.value}
              onChangeText={form.onChangeText}
              placeholder={form.placeholder}
              secureTextEntry={securityPassword}
              iconRightOnPress={handleToggleHidePassword}
              iconRightBundle={BundleIconSetName.IONICONS}
              iconRightName={
                securityPassword ? 'eye-off-outline' : 'eye-outline'
              }
              iconRightStyle={iconInputRightStyle}
              containerStyle={styles.input}
            />
          );
        default:
          return (
            <AppInput
              key={index}
              onChangeText={form.onChangeText}
              value={form.value}
              placeholder={form.placeholder}
              containerStyle={styles.input}
            />
          );
      }
    });
  }, [
    formSchema,
    iconInputRightStyle,
    securityPassword,
    handleToggleHidePassword,
  ]);

  const renderButtonTitle = useCallback(() => {
    return (
      <Typography type={TypographyType.BUTTON_TEXT}>{buttonTitle}</Typography>
    );
  }, [buttonTitle]);

  return (
    <Container style={containerForm}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {renderForm ? renderForm() : renderBaseForm()}

        <FilledButton
          rounded={ButtonRoundedType.LARGE}
          primary
          renderTitleComponent={renderButtonTitle}
          style={styles.buttonSubmit}
        />
      </TouchableWithoutFeedback>
    </Container>
  );
};

export const AuthForm = React.memo(_AuthForm);
