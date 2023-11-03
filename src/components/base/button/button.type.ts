import React, { ReactElement } from "react";
import {
  TouchableHighlightProps,
  TouchableOpacityProps,
  StyleProp,
} from "react-native";
// @types
import { Children} from "../base.type";
import { TextStyle, ViewStyle } from "@data/models";
import { TypographyProps } from "../typography";

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
    fontStyle?: StyleProp<TextStyle>
  ) => Children;
  /**
   * return children for contentContainer customization  as you want.
   */
  renderContentContainerComponent?: (children: Children) => ReactElement;

  children?: Children;
}
