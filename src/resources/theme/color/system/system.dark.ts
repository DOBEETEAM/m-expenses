// @types
import { GetSystemColor, GetSystemCommonColor } from "../../data/model";
// @utils
import { hexToRgba, rgbaToRgb } from "@utils/color";
// @constants
import { SYSTEM_LIGHT } from "./system.light";
import { CORE } from "../core";

export const getSystemCommonDarkColor: GetSystemCommonColor = (colors) => ({
  // ACCENT (Nature)
  primary: "#212121",
  // —— Primary variants ——
  primary5: rgbaToRgb(hexToRgba(colors.primary as string, 0.05)),
  primary20: rgbaToRgb(hexToRgba(colors.primary as string, 0.2)),
  onPrimary: "#FFFFFF",

  secondary: "#212121",
  // —— Secondary variants ——
  secondary5: rgbaToRgb(hexToRgba(colors.secondary as string, 0.05)),
  secondary20: rgbaToRgb(hexToRgba(colors.secondary as string, 0.2)),
  onSecondary: "#FFFFFF",

  // NEUTRAL (Nature)
  neutral: colors.grey700,
  // —— Neutral variants ——
  background: "#121212",
  onBackground: "#ffffff",
  surface: "#2a2a2a",
  onSurface: "#ffffff",
  persistOnSurface: colors.onSurface,

  // OTHERS
  coreOverlay: colors.black,
});

export const getSystemDarkColor: GetSystemColor = (
  coreColors,
  systemCommonColors
) => ({
  ...SYSTEM_LIGHT,
  ...systemCommonColors,

  border: coreColors.grey700,
  placeholder: coreColors.grey500,
  disabled: "#444444",

  onOverlay: coreColors.white,
  // underlay: hexToRgba(systemCommonColors.coreOverlay, 0.2),

  // for Android
  statusBarBackground: systemCommonColors.primary,
  statusBarBackgroundSurfaceMode: systemCommonColors.surface,

  navBarBackground: systemCommonColors.primary,
  onNavBarBackground: systemCommonColors.onPrimary,

  contentBackgroundPrimary: rgbaToRgb(
    hexToRgba(systemCommonColors.primary as string, 0.8)
  ),
  contentBackgroundWeak: coreColors.grey800,
  contentBackground: systemCommonColors.neutral,
  contentBackgroundStrong: coreColors.grey600,
  onContentBackground: systemCommonColors.onSurface,

  persistPrimary: coreColors.primary,
  persistSecondary: coreColors.secondary,

  primaryHighlight: systemCommonColors.onSurface,
  onPrimaryHighlight: systemCommonColors.surface,
  secondaryHighlight: systemCommonColors.onSurface,
  surfaceHighlight: systemCommonColors.onSurface,

  // TEXT/ ICON COLOR
  // for text in general, still can use others color like onPrimary and onSecondary for specific purpose.
  persistTextPrimary: systemCommonColors.persistOnSurface,
  textPrimary: systemCommonColors.onSurface,
  textSecondary: systemCommonColors.neutral,
  textTertiary: coreColors.grey600,
  textInactive: coreColors.grey500,

  iconInactive: coreColors.grey600,
  indicator: systemCommonColors.onSurface,
});

export const SYSTEM_COMMON_DARK = getSystemCommonDarkColor(CORE);
export const SYSTEM_DARK = getSystemDarkColor(CORE, SYSTEM_COMMON_DARK);
