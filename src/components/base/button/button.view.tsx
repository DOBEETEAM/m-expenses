import React, {forwardRef, Fragment} from 'react';
import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
// @types
import {BaseButtonProps} from './button.type';
import {TextStyle} from '@data/models';
import {Theme, TypographyType} from '@resources/theme';
import {Ref} from '../base.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {Typography} from '../typography';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    text: {
      color: theme.color.textPrimary,
    },
  });
  return styles;
};

const _Button = forwardRef(
  (
    {
      children,
      useTouchableHighlight,
      useContentContainer,

      title,
      titleStyle,

      typoProps,

      renderTitleComponent,
      renderContentContainerComponent,

      ...props
    }: BaseButtonProps,
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const styles = React.useMemo(() => {
      const baseStyles = createStyles(theme);

      return baseStyles;
    }, [theme]);

    const titleStyles = React.useMemo(() => {
      return [
        typoProps?.type ? theme.typography[typoProps.type] : styles.text,
        titleStyle,
        typoProps?.style,
      ];
    }, [styles, titleStyle, typoProps?.type, typoProps?.style, theme]);

    const renderContent = () => {
      const ContentContainer = useContentContainer ? View : Fragment;
      return (
        <ContentContainer>
          {/* {iconLeft}
          {!!renderIconLeft && renderIconLeft(titleStyles, {}, fontStyle)} */}

          {renderTitleComponent ? (
            renderTitleComponent(titleStyles, {})
          ) : typeof children === 'string' || !!title ? (
            <Typography
              type={TypographyType.LABEL_MEDIUM}
              {...typoProps}
              style={titleStyles as TextStyle}>
              {children || title}
            </Typography>
          ) : (
            children
          )}
          {/* {!!renderIconRight && renderIconRight(titleStyles, {}, fontStyle)}
          {iconRight} */}
        </ContentContainer>
      );
    };

    const Wrapper: React.ElementType = React.useMemo(() => {
      if (useTouchableHighlight) {
        return RNTouchableHighlight;
      }

      return RNTouchableOpacity;
    }, [useTouchableHighlight]);

    return (
      <Wrapper
        underlayColor={theme.color.underlay}
        activeOpacity={0.6}
        {...props}
        ref={ref}>
        {renderContentContainerComponent
          ? renderContentContainerComponent(renderContent())
          : renderContent()}
      </Wrapper>
    );
  },
);

export const Button = React.memo(_Button);
