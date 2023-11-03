import {Platform, ColorValue, PlatformColor} from 'react-native';
// @types
import {GetSystemColor, GetSystemCommonColor} from '../../data/model';
// @utils
import {hexToRgba, rgbaToRgb} from '@utils/color';
// @constants
import {CORE} from '../core';

export const getSystemCommonLightColor: GetSystemCommonColor = (colors) => ({
  // ACCENT (Nature)
  primary: colors.primary,
  // —— Primary variants ——
  primary5: rgbaToRgb(hexToRgba(colors.primary as string, 0.05)),
  primary20: rgbaToRgb(hexToRgba(colors.primary as string, 0.2)),
  onPrimary: colors.onPrimary,

  secondary: colors.secondary,
  // —— Secondary variants ——
  secondary5: rgbaToRgb(hexToRgba(colors.secondary as string, 0.05)),
  secondary20: rgbaToRgb(hexToRgba(colors.secondary as string, 0.2)),
  onSecondary: colors.onSecondary,

  // NEUTRAL (Nature)
  neutral: colors.neutral,
  // —— Neutral variants ——
  background: colors.background,
  onBackground: colors.onBackground,
  surface: colors.surface,
  onSurface: colors.onSurface,
  persistOnSurface: colors.onSurface,

  // OTHERS
  coreOverlay: colors.black,
});

export const getSystemColor: GetSystemColor = (colors, systemCommonColors) => ({
  ...systemCommonColors,
  // MAPPING
  // —— GREY variants ——
  border: colors.grey300,
  placeholder: colors.grey500,
  disabled: '#eeeeee',
  onDisabled: colors.grey500,

  overlay60: hexToRgba(systemCommonColors.coreOverlay as string, 0.6),
  overlay30: hexToRgba(systemCommonColors.coreOverlay as string, 0.3),
  onOverlay: colors.white,
  underlay: hexToRgba(systemCommonColors.coreOverlay as string, 0.1), // use for touchableHighlight
  shadow: colors.black,

  // for Android
  statusBarBackground: systemCommonColors.primary,
  statusBarBackgroundSurfaceMode: systemCommonColors.surface,

  navBarBackground: systemCommonColors.primary,
  onNavBarBackground: systemCommonColors.onPrimary,

  contentBackgroundPrimary: systemCommonColors.primary20,
  contentBackgroundWeak: colors.grey200,
  contentBackground: colors.grey300,
  contentBackgroundStrong: colors.grey400,
  onContentBackground: systemCommonColors.onSurface,

  persistPrimary: colors.primary,
  persistPrimary5: systemCommonColors.primary5,
  persistPrimary20: systemCommonColors.primary20,
  onPersistPrimary: colors.onPrimary,
  persistSecondary: colors.secondary,
  persistSecondary20: systemCommonColors.secondary20,
  onPersistSecondary: colors.onSecondary,

  primaryHighlight: systemCommonColors.primary,
  onPrimaryHighlight: colors.onPrimary,
  secondaryHighlight: systemCommonColors.secondary,
  surfaceHighlight: systemCommonColors.surface,

  // TEXT/ ICON COLOR
  // for text in general, still can use others color like onPrimary and onSecondary for specific purpose.
  persistTextPrimary: systemCommonColors.persistOnSurface,
  textPrimary: systemCommonColors.onSurface,
  textSecondary: systemCommonColors.neutral,
  textTertiary: colors.grey700,
  textInactive: colors.grey600,

  iconInactive: colors.grey600,

  indicator: (Platform.OS === 'android'
    ? PlatformColor('?attr/colorAccent')
    : '#999999') as ColorValue,
});

export const SYSTEM_COMMON_LIGHT = getSystemCommonLightColor(CORE);
export const SYSTEM_LIGHT = getSystemColor(CORE, SYSTEM_COMMON_LIGHT);
