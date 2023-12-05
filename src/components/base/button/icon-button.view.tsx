import React, {forwardRef, memo, useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @types
import {AnyStyle} from '@data/models';
import {IconButtonProps} from './button.type';
import {Ref} from '../base.type';
import {Theme} from '@resources/theme';
// @hooks
import {useTheme} from '@shared';
// @components
import {Icon} from '../icon';
import {Button} from './button.view';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    primary: {
      color: theme.color.primary,
    },
    secondary: {
      color: theme.color.secondary,
    },
    primaryHighlight: {
      color: theme.color.primaryHighlight,
    },
    secondaryHighlight: {
      color: theme.color.secondaryHighlight,
    },
    neutral: {
      color: theme.color.neutral,
    },
    disabled: {
      color: theme.color.disabled,
    },
    shadow: {
      shadowColor: theme.color.shadow,
      ...theme.layout.shadow,
    },
    text: {
      color: theme.color.textPrimary,
    },
  });

  return styles;
};

const _IconButton = forwardRef(
  (
    {
      titleStyle,
      style,

      name,
      bundle,
      iconStyle,
      iconProps,

      ...props
    }: IconButtonProps,
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const styles = useMemo(() => {
      const baseStyles: AnyStyle = createStyles(theme);

      return baseStyles;
    }, [theme]);

    const buttonStyles = useMemo(() => {
      return [styles.container, style];
    }, [styles, style]);

    const titleStyles = useMemo(() => {
      return [
        styles.text,
        props.shadow && styles.shadow,
        props.primary && styles.primary,
        props.secondary && styles.secondary,
        props.primaryHighlight && styles.primaryHighlight,
        props.secondaryHighlight && styles.secondaryHighlight,
        props.neutral && styles.neutral,
        // disabled should be the last overridden style
        props.disabled && styles.disabled,
        titleStyle,
      ];
    }, [
      styles,
      props.shadow,
      props.primary,
      props.secondary,
      props.primaryHighlight,
      props.secondaryHighlight,
      props.neutral,
      props.disabled,
      titleStyle,
    ]);

    const iconStyles = useMemo(
      () => [titleStyles, iconStyle],
      [titleStyles, iconStyle],
    );

    const renderTitleComponent = useCallback(() => {
      if (!props.renderTitleComponent) {
        return null;
      }

      return props.renderTitleComponent(iconStyles, buttonStyles);
    }, [titleStyles, buttonStyles, iconStyles, props]);

    const renderIconComponent = useCallback(() => {
      if (props.children) {
        return props.children;
      }

      return (
        <Icon
          name={name}
          bundle={bundle}
          style={iconStyles as any}
          {...iconProps}
        />
      );
    }, [iconStyles, iconProps, name, bundle, props.children]);

    return (
      <Button
        activeOpacity={0.3}
        {...props}
        ref={ref}
        style={buttonStyles}
        titleStyle={titleStyles}
        children={renderIconComponent()}
        renderTitleComponent={
          props.renderTitleComponent && renderTitleComponent
        }
      />
    );
  },
);

export const IconButton = memo(_IconButton);
