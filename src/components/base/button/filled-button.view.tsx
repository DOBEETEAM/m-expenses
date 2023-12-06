import React, {forwardRef, memo, useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @types
import {AnyStyle} from '@data/models/base';
import {FilledButtonProps} from './button.type';
import {Ref} from '../base.type';
import {Theme} from '@resources/theme';
// @hooks
import {useTheme} from '@shared';
// @constants
import {ButtonRoundedType} from './button.constant';
// @components
import {Button} from './button.view';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: theme.color.persistTextPrimary,
    },
    primary: {
      backgroundColor: theme.color.persistPrimary,
    },
    secondary: {
      backgroundColor: theme.color.persistSecondary,
    },
    primaryHighlight: {
      backgroundColor: theme.color.primaryHighlight,
    },
    secondaryHighlight: {
      backgroundColor: theme.color.secondaryHighlight,
    },
    neutral: {
      backgroundColor: theme.color.contentBackgroundStrong,
    },
    disabled: {
      backgroundColor: theme.color.disabled,
    },
    shadow: {
      shadowColor: theme.color.shadow,
      ...theme.layout.shadow,
    },
    [ButtonRoundedType.EXTRA_SMALL]: {
      borderRadius: theme.layout.borderRadiusExtraSmall,
    },
    [ButtonRoundedType.SMALL]: {
      borderRadius: theme.layout.borderRadiusSmall,
    },
    [ButtonRoundedType.MEDIUM]: {
      borderRadius: theme.layout.borderRadiusMedium,
    },
    [ButtonRoundedType.LARGE]: {
      borderRadius: theme.layout.borderRadiusLarge,
    },
    text: {
      color: theme.color.onPersistPrimary,
    },
    textDisabled: {
      color: theme.color.onDisabled,
    },
  });

  return styles;
};

const _FilledButton = forwardRef(
  (
    {
      titleStyle,
      style,

      ...props
    }: FilledButtonProps,
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const styles = useMemo(() => {
      const baseStyles: AnyStyle = createStyles(theme);

      return baseStyles;
    }, [theme]);

    const buttonStyles = useMemo(() => {
      return [
        styles.container,
        props.shadow && styles.shadow,
        props.rounded && styles[props.rounded],
        props.primary
          ? styles.primary
          : props.primaryHighlight
          ? styles.primaryHighlight
          : props.secondary
          ? styles.secondary
          : props.secondaryHighlight
          ? styles.secondaryHighlight
          : {},
        props.neutral && styles.neutral,
        // disabled should be the last overridden style
        props.disabled && styles.disabled,
        style,
      ];
    }, [
      styles,
      style,
      props.shadow,
      props.rounded,
      props.primary,
      props.secondary,
      props.primaryHighlight,
      props.secondaryHighlight,
      props.neutral,
      props.disabled,
    ]);

    const titleStyles = useMemo(
      () => [styles.text, props.disabled && styles.textDisabled, titleStyle],
      [styles, titleStyle, props.disabled],
    );

    const renderTitleComponent = useCallback(() => {
      if (!props.renderTitleComponent) {
        return null;
      }

      return props.renderTitleComponent(titleStyles, buttonStyles);
    }, [titleStyles, buttonStyles, props]);

    return (
      <Button
        ref={ref}
        {...props}
        style={buttonStyles}
        renderTitleComponent={
          props.renderTitleComponent && renderTitleComponent
        }
      />
    );
  },
);

export const FilledButton = memo(_FilledButton);
