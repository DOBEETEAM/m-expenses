import React from "react";
import { Text, StyleSheet, Animated } from "react-native";
// @types
import { Ref } from "../base.type";
import { TypographyProps } from "./typography.type";
import { Theme, TypographyType } from "@resources/theme";
// @hooks
import { useTheme } from "@shared/hooks";

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    primary: {
      color: theme.color.textPrimary,
    },
    secondary: {
      color: theme.color.textSecondary,
    },
    onPrimary: {
      color: theme.color.onPrimary,
    },
    onSecondary: {
      color: theme.color.onSecondary,
    },
    onSurface: {
      color: theme.color.onSurface,
    },
    onBackground: {
      color: theme.color.onBackground,
    },
    onContentBackground: {
      color: theme.color.onContentBackground,
    },
    onDisabled: {
      color: theme.color.onDisabled,
    },
  });

  return styles;
};

const _Typography = React.forwardRef(
  (
    {
      children,
      type = TypographyType.LABEL_MEDIUM,
      style,

      animated,
      onPrimary,
      onSecondary,
      onBackground,
      onSurface,
      onDisabled,
      onContentBackground,

      ...props
    }: TypographyProps,
    ref: Ref
  ) => {
    const { theme } = useTheme();

    const styles = React.useMemo(() => {
      const baseStyles = createStyles(theme);
      const finalStyles = [
        theme.typography[type],
        style,

        onDisabled
          ? baseStyles.onDisabled
          : onPrimary
          ? baseStyles.onPrimary
          : onSecondary
          ? baseStyles.onSecondary
          : onSurface
          ? baseStyles.onSurface
          : onBackground
          ? baseStyles.onBackground
          : onContentBackground
          ? baseStyles.onContentBackground
          : {},
      ];

      return finalStyles;
    }, [
      theme,
      type,
      style,
      onDisabled,
      onPrimary,
      onSecondary,
      onSurface,
      onBackground,
      onContentBackground,
    ]);

    const TextComponent = React.useMemo(() => {
      if (animated) {
        return Animated.Text;
      }

      return Text;
    }, [animated]);

    return (
      <TextComponent {...props} ref={ref} style={styles}>
        {children}
      </TextComponent>
    );
  }
);

export const Typography = React.memo(_Typography);
