import { TextProps } from "react-native";
import { Children } from "../base.type";
import { TypographyType } from "@resources/theme";

export interface TypographyProps extends TextProps {
  children?: Children;
  type?: TypographyType;

  animated?: boolean;
  onPrimary?: boolean;
  onSecondary?: boolean;
  onSurface?: boolean;
  onBackground?: boolean;
  onContentBackground?: boolean;
  onDisabled?: boolean;
}
