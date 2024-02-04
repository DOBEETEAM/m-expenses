import React, {forwardRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
// @packages
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// @types
import {ContainerProps} from './container.type';
import {Ref} from '../base.type';
import {Theme} from '@resources/theme';
import {useTheme} from '@shared/hooks';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    surface: {
      backgroundColor: theme.color.surface,
    },
    contentContainer: {
      backgroundColor: theme.color.contentBackground,
    },
    flex: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },
    rowCenterVertical: {
      alignItems: 'center',
      justifyContent: undefined,
    },
    rowCenterHorizontal: {
      justifyContent: 'center',
      alignItems: undefined,
    },
    centerHorizontal: {
      alignItems: 'center',
      justifyContent: undefined,
    },
    centerVertical: {
      justifyContent: 'center',
      alignItems: undefined,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: theme.color.shadow,
      ...theme.layout.shadow,
    },
  });
};

const _Container = forwardRef(
  (
    {
      children,
      style,

      animated,
      flex,
      row,
      center,
      centerHorizontal,
      centerVertical: centerVerticalProp,
      noBackground,
      content,
      shadow,

      safeLayout,
      safeTopLayout,

      ...props
    }: ContainerProps,
    ref: Ref,
  ) => {
    const {theme} = useTheme();
    const {top, bottom} = useSafeAreaInsets();

    const styles = React.useMemo(() => {
      const baseStyles: any = createStyles(theme);
      let additionalStyle: any = {};
      const centerVertical =
        centerVerticalProp !== undefined
          ? centerVerticalProp
          : // : row
            // ? true
            undefined;

      if (flex) {
        additionalStyle = {...additionalStyle, ...baseStyles.flex};
      }

      if (row) {
        additionalStyle = {...additionalStyle, ...baseStyles.row};
      }

      if (center) {
        additionalStyle = {...additionalStyle, ...baseStyles.center};
      }

      if (centerHorizontal) {
        additionalStyle = {
          ...additionalStyle,
          ...(row
            ? baseStyles.rowCenterHorizontal
            : baseStyles.centerHorizontal),
        };
      }

      if (centerVertical) {
        additionalStyle = {
          ...additionalStyle,
          ...(row ? baseStyles.rowCenterVertical : baseStyles.centerVertical),
        };
      }

      return [
        noBackground
          ? {}
          : content
          ? baseStyles.contentContainer
          : baseStyles.surface,

        safeLayout && {paddingBottom: bottom},
        safeTopLayout && {paddingTop: top},
        shadow && baseStyles.shadow,
        additionalStyle,
      ];
    }, [
      theme,
      row,
      center,
      flex,
      shadow,
      safeLayout,
      safeTopLayout,
      centerHorizontal,
      centerVerticalProp,
      noBackground,
      content,
    ]);

    const componentStyles = React.useMemo(() => {
      return [styles, style];
    }, [styles, style]);

    const Wrapper = React.useMemo(() => {
      if (animated) {
        return Animated.View;
      }

      return View;
    }, [animated]);

    return (
      <Wrapper {...props} ref={ref} style={componentStyles}>
        {children}
      </Wrapper>
    );
  },
);

export const Container = React.memo(_Container);
