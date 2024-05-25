import React, {ReactElement} from 'react';
import {
  TouchableHighlightProps,
  TouchableOpacityProps,
  StyleProp,
} from 'react-native';
// @types
import {Children} from '../base.type';
import {TextStyle, ViewStyle} from '@data/models';
import {TypographyProps} from '../typography';
import {BundleIcon, IconProps} from '../icon';
// @constants
import {ButtonRoundedType} from './button.constant';

export interface BaseButtonProps
  extends TouchableOpacityProps,
    TouchableHighlightProps {
  useTouchableHighlight?: boolean;
  useContentContainer?: boolean;

  title?: string;
  titleStyle?: StyleProp<TextStyle>;

  typoProps?: TypographyProps;

  renderTitleComponent?: (
    titleStyle: StyleProp<TextStyle>,
    buttonStyle?: StyleProp<ViewStyle>,
    fontStyle?: StyleProp<TextStyle>,
  ) => Children;
  /**
   * return children for contentContainer customization  as you want.
   */
  renderContentContainerComponent?: (children: Children) => ReactElement;
  renderIconLeft?: (
    titleStyle: StyleProp<TextStyle>,
    buttonStyle?: StyleProp<ViewStyle>,
    fontStyle?: StyleProp<TextStyle>,
  ) => ReactElement;

  children?: Children;
}

export interface CommonButtonProps extends BaseButtonProps {
  primary?: boolean;
  primaryHighlight?: boolean;
  secondary?: boolean;
  secondaryHighlight?: boolean;
  neutral?: boolean;
  disabled?: boolean;
  shadow?: boolean;
}

export interface SolidButtonProps extends CommonButtonProps {
  rounded?: ButtonRoundedType;
}

export interface FilledButtonProps extends SolidButtonProps {}

export interface IconButtonProps extends CommonButtonProps {
  // style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  bundle?: BundleIcon;
  name: string;

  iconProps?: Omit<IconProps, 'children'>;
}
