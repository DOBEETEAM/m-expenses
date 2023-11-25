import React, {forwardRef, useMemo} from 'react';
import {TextInput, StyleSheet} from 'react-native';
// @types
import {InputProps} from './input.type';
import {Ref} from '../base.type';
import {Theme} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    primary: {
      color: theme.color.textPrimary,
    },
  });

  return styles;
};

const _Input = forwardRef(({style, type, ...props}: InputProps, ref: Ref) => {
  const {theme} = useTheme();

  const styles = useMemo(() => {
    const baseStyles: any = createStyles(theme);

    return [baseStyles.primary, type && theme.typography[type]];
  }, [theme, type]);

  const componentStyle = useMemo(() => {
    return [styles, style];
  }, [styles, style]);

  return (
    <TextInput
      ref={ref}
      placeholderTextColor={theme.color.placeholder}
      keyboardAppearance={theme.id === 'dark' ? 'dark' : 'light'}
      {...props}
      style={componentStyle}
    />
  );
});

export const Input = React.memo(_Input);
