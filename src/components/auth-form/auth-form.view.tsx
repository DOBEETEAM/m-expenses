import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
// @types
import {AuthFormProps} from './auth-form.type';
import {ButtonRoundedType} from '@components/base';
import {Theme, TypographyType} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';
// @constants
import {BundleIconSetName} from '@components/base';
// @components
import {
  AppInput,
  Container,
  FilledButton,
  Typography,
  CheckBox,
} from '@components/base';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {},
    input: {
      marginVertical: 12,
    },
    buttonSubmit: {
      paddingVertical: 15,
      marginVertical: 15,
    },
    error: {
      color: theme.color.danger,
      marginTop: -10,
      marginLeft: 10,
    },
    checkBox: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  });
};

const _AuthForm: React.FC<AuthFormProps> = ({
  formSchema,
  buttonTitle,
  containerFormStyle,

  onSubmit,
}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
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
    if (!formSchema) {
      return null;
    }

    return formSchema.map((form, index) => {
      switch (form.fieldType) {
        case 'email':
          return (
            <React.Fragment key={index}>
              <AppInput
                onChangeText={form.onChangeText}
                value={form.value}
                placeholder={form.placeholder}
                containerStyle={styles.input}
              />
              {form.error && (
                <Typography type={TypographyType.CAPTION} style={styles.error}>
                  {form.error}
                </Typography>
              )}
            </React.Fragment>
          );
        case 'password':
          return (
            <React.Fragment key={index}>
              <AppInput
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
              {form.error && (
                <Typography type={TypographyType.CAPTION} style={styles.error}>
                  {form.error}
                </Typography>
              )}
            </React.Fragment>
          );
        case 'agreement':
          return (
            <Container noBackground key={index} row style={{marginVertical: 4}}>
              <CheckBox
                value={form.isAgree}
                onPress={form.onChangeCheckbox}
                style={styles.checkBox}
              />
              <Typography type={TypographyType.LABEL_SMALL} style={{paddingHorizontal: 12}}>
                {form.placeholder}
              </Typography>
            </Container>
          );
        default:
          return (
            <React.Fragment key={index}>
              <AppInput
                onChangeText={form.onChangeText}
                value={form.value}
                placeholder={form.placeholder}
                containerStyle={styles.input}
              />
              {form.error && (
                <Typography type={TypographyType.CAPTION} style={styles.error}>
                  {form.error}
                </Typography>
              )}
            </React.Fragment>
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
    <Container noBackground style={containerForm}>
      {renderBaseForm()}

      <FilledButton
        rounded={ButtonRoundedType.LARGE}
        primary
        renderTitleComponent={renderButtonTitle}
        style={styles.buttonSubmit}
        onPress={onSubmit}
      />
    </Container>
  );
};

export const AuthForm = React.memo(_AuthForm);