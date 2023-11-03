import { ColorValue } from "react-native";

export type CoreCommonColor = {
  // Core
  grey50: ColorValue;
  grey100: ColorValue;
  grey200: ColorValue;
  grey300: ColorValue;
  grey400: ColorValue;
  grey500: ColorValue;
  grey600: ColorValue;
  grey700: ColorValue;
  grey800: ColorValue;
  grey900: ColorValue;

  // green
  green50: ColorValue;
  green100: ColorValue;
  green200: ColorValue;
  green300: ColorValue;
  green400: ColorValue;
  green500: ColorValue;
  green600: ColorValue;
  green700: ColorValue;
  green800: ColorValue;
  green900: ColorValue;

  // blue
  blue50: ColorValue;
  blue100: ColorValue;
  blue200: ColorValue;
  blue300: ColorValue;
  blue400: ColorValue;
  blue500: ColorValue;
  blue600: ColorValue;
  blue700: ColorValue;
  blue800: ColorValue;
  blue900: ColorValue;

  // BLUE GREY
  blueGray50: ColorValue;
  blueGray100: ColorValue;
  blueGray200: ColorValue;
  blueGray300: ColorValue;
  blueGray400: ColorValue;
  blueGray500: ColorValue;
  blueGray600: ColorValue;
  blueGray700: ColorValue;
  blueGray800: ColorValue;
  blueGray900: ColorValue;

  // YELLOW
  yellow50: ColorValue;
  yellow100: ColorValue;
  yellow200: ColorValue;
  yellow300: ColorValue;
  yellow400: ColorValue;
  yellow500: ColorValue;
  yellow600: ColorValue;
  yellow700: ColorValue;
  yellow800: ColorValue;
  yellow900: ColorValue;

  black: ColorValue;
  white: ColorValue;
};

export type CoreColor = CoreCommonColor & {
  primary: ColorValue;
  onPrimary: ColorValue;
  secondary: ColorValue;
  onSecondary: ColorValue;
  neutral: ColorValue;
  background: ColorValue;
  onBackground: ColorValue;
  surface: ColorValue;
  onSurface: ColorValue;
  skeletonContainer: ColorValue;
  skeletonContent?: ColorValue;
  coreOverlay?: ColorValue;
};

export type SystemCommonColor = {
  primary: ColorValue;
  // —— Primary variants ——
  primary5: ColorValue;
  primary20: ColorValue;
  onPrimary: ColorValue;

  secondary: ColorValue;
  // —— Secondary variants ——
  secondary5: ColorValue;
  secondary20: ColorValue;
  onSecondary: ColorValue;

  // NEUTRAL (Nature)
  neutral: ColorValue;
  // —— Neutral variants ——
  background: ColorValue;
  onBackground: ColorValue;
  surface: ColorValue;
  onSurface: ColorValue;
  persistOnSurface: ColorValue;

  // OTHERS
  coreOverlay: ColorValue;
};

export type SystemColor = SystemCommonColor & {
  // System
  primary5: ColorValue;
  primary20: ColorValue;
  secondary5: ColorValue;
  secondary20: ColorValue;
  persistOnSurface: ColorValue;
  border: ColorValue;
  placeholder: ColorValue;
  disabled: ColorValue;
  onDisabled: ColorValue;
  overlay60: ColorValue;
  overlay30: ColorValue;
  onOverlay: ColorValue;
  underlay: ColorValue;
  shadow: ColorValue;
  statusBarBackground: ColorValue;
  statusBarBackgroundSurfaceMode: ColorValue;
  navBarBackground: ColorValue;
  onNavBarBackground: ColorValue;
  contentBackgroundPrimary: ColorValue;
  contentBackgroundWeak: ColorValue;
  contentBackground: ColorValue;
  contentBackgroundStrong: ColorValue;
  onContentBackground: ColorValue;
  persistPrimary: ColorValue;
  persistPrimary5: ColorValue;
  persistPrimary20: ColorValue;
  onPersistPrimary: ColorValue;
  persistSecondary: ColorValue;
  persistSecondary20: ColorValue;
  onPersistSecondary: ColorValue;
  primaryHighlight: ColorValue;
  onPrimaryHighlight: ColorValue;
  secondaryHighlight: ColorValue;
  surfaceHighlight: ColorValue;
  persistTextPrimary: ColorValue;
  textPrimary: ColorValue;
  textSecondary: ColorValue;
  textTertiary: ColorValue;
  textInactive: ColorValue;
  iconInactive: ColorValue;
  indicator: ColorValue;
};

export type Color = CoreColor & SystemColor;

export type GetCoreColor = <T extends CoreCommonColor>(colors: T) => CoreColor;
export type GetSystemCommonColor = <T extends CoreColor>(
  colors: T
) => SystemCommonColor;
export type GetSystemColor = <T extends CoreColor>(
  colors: T,
  systemCommonColors: SystemCommonColor
) => SystemColor;
