import React, {memo, useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @types
import {AppInputProps} from './app-input.type';
// @hooks
import {useTheme} from '@shared';
// @constants
import {BundleIconSetName} from '../../icon';
// @components
import {Input} from '../input.view';
import {Container} from '../../container';
import {Icon} from '../../icon';

const styles = StyleSheet.create({
  container: {
    // height: 30,
  },
  iconLeft: {
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
});

const _AppInput: React.FC<AppInputProps> = ({
  iconLeftBundle = BundleIconSetName.ANT_DESIGN,
  iconLeftName = '',
  iconLeftStyle = {},
  iconLeftOnPress,
  
  iconRightBundle = BundleIconSetName.ANT_DESIGN,
  iconRightName = '',
  iconRightStyle = {},
  iconRightOnPress,

  containerStyle = {},

  ...inputProps
}) => {
  const {theme} = useTheme();

  const iconStyle = useMemo(() => {
    return [
      styles.iconLeft,
      {
        color: theme.color.iconInactive,
      },
      iconLeftStyle,
    ];
  }, [theme, iconLeftStyle]);

  const iconRightStyles = useMemo(() => {
    return [
      styles.iconLeft,
      {
        color: theme.color.iconInactive,
      },
      iconRightStyle,
    ];
  }, [theme, iconRightStyle]);

  const containerBaseStyle = useMemo(() => {
    return [
      styles.container,
      {
        backgroundColor: theme.color.surface,
        borderWidth: theme.layout.borderWidthSmall,
        borderRadius: theme.layout.borderRadiusHuge,
        borderColor: theme.color.disabled,
      },
      containerStyle,
    ];
  }, [theme, containerStyle]);

  const inputStyle = useMemo(() => {
    return [styles.input, inputProps?.style];
  }, [inputProps?.style]);

  return (
    <Container row style={containerBaseStyle}>
      {!!iconLeftName && (
        <Icon
          onPress={iconLeftOnPress}
          bundle={iconLeftBundle}
          name={iconLeftName}
          style={iconStyle as any}
        />
      )}
      <Input {...inputProps} style={inputStyle} />
      {!!iconRightName && (
        <Icon
          onPress={iconRightOnPress}
          bundle={iconRightBundle}
          name={iconRightName}
          style={iconRightStyles as any}
        />
      )}
    </Container>
  );
};

export const AppInput = memo(_AppInput);
