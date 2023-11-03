import { COLOR_DARK } from "../color";
import {
  GetTypography,
  TypographyFontSize,
  TypographyType,
} from "../data/model";

export const getTypographyDarkColor: GetTypography = (colors) => ({
  // DISPLAY
  // NORMAL
  [TypographyType.DISPLAY_LARGE]: {
    fontSize: TypographyFontSize.DISPLAY_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.DISPLAY_SMALL]: {
    fontSize: TypographyFontSize.DISPLAY_SMALL,
    color: colors.textPrimary,
  },
  // TITLE
  // PRIMARY
  [TypographyType.TITLE_LARGE_PRIMARY]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.primaryHighlight,
  },
  [TypographyType.TITLE_SEMI_LARGE_PRIMARY]: {
    fontSize: TypographyFontSize.HEADLINE_SMALL,
    color: colors.primaryHighlight,
  },
  [TypographyType.TITLE_MEDIUM_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.primaryHighlight,
  },
  // TERTIARY
  [TypographyType.TITLE_LARGE_TERTIARY]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.textTertiary,
  },
  [TypographyType.TITLE_SEMI_LARGE_TERTIARY]: {
    fontSize: TypographyFontSize.HEADLINE_SMALL,
    color: colors.textTertiary,
  },
  [TypographyType.TITLE_MEDIUM_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.textTertiary,
  },
  // SECONDARY
  [TypographyType.TITLE_LARGE_SECONDARY]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.textSecondary,
  },
  // NORMAL
  [TypographyType.TITLE_HUGE]: {
    fontSize: TypographyFontSize.HEADLINE_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.TITLE_LARGE]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.textPrimary,
  },
  [TypographyType.TITLE_SEMI_LARGE]: {
    fontSize: TypographyFontSize.HEADLINE_SMALL,
    color: colors.textPrimary,
  },
  [TypographyType.TITLE_MEDIUM]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.textPrimary,
  },
  // LABEL
  // PRIMARY
  [TypographyType.LABEL_HUGE_PRIMARY]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_SEMI_HUGE_PRIMARY]: {
    fontSize: TypographyFontSize.HEADLINE_SMALL,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_LARGE_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_SEMI_LARGE_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_SEMI_LARGE,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_MEDIUM_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_SEMI_MEDIUM_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_SEMI_MEDIUM,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_SMALL_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.primaryHighlight,
  },
  [TypographyType.LABEL_EXTRA_SMALL_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_EXTRA_SMALL,
    color: colors.primaryHighlight,
  },
  // TERTIARY
  [TypographyType.LABEL_LARGE_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.textTertiary,
  },
  [TypographyType.LABEL_SEMI_LARGE_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_SEMI_LARGE,
    color: colors.textTertiary,
  },
  [TypographyType.LABEL_MEDIUM_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.textTertiary,
  },
  [TypographyType.LABEL_SEMI_MEDIUM_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_SEMI_MEDIUM,
    color: colors.textTertiary,
  },
  [TypographyType.LABEL_SMALL_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.textTertiary,
  },
  [TypographyType.LABEL_TINY_TERTIARY]: {
    fontSize: TypographyFontSize.NOTE_LARGE,
    color: colors.textTertiary,
  },
  // SECONDARY
  [TypographyType.LABEL_LARGE_SECONDARY]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.textSecondary,
  },
  [TypographyType.LABEL_MEDIUM_SECONDARY]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.textSecondary,
  },
  [TypographyType.LABEL_SMALL_SECONDARY]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.textSecondary,
  },
  // NORMAL
  [TypographyType.LABEL_GIGANTIC]: {
    fontSize: TypographyFontSize.HEADLINE_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_HUGE]: {
    fontSize: TypographyFontSize.HEADLINE_MEDIUM,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_SEMI_HUGE]: {
    fontSize: TypographyFontSize.HEADLINE_SMALL,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_LARGE]: {
    fontSize: TypographyFontSize.BODY_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_SEMI_LARGE]: {
    fontSize: TypographyFontSize.BODY_SEMI_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_MEDIUM]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_SEMI_MEDIUM]: {
    fontSize: TypographyFontSize.BODY_SEMI_MEDIUM,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_SMALL]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_EXTRA_SMALL]: {
    fontSize: TypographyFontSize.BODY_EXTRA_SMALL,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_TINY]: {
    fontSize: TypographyFontSize.NOTE_LARGE,
    color: colors.textPrimary,
  },
  [TypographyType.LABEL_EXTRA_TINY]: {
    fontSize: TypographyFontSize.NOTE_MEDIUM,
    color: colors.textPrimary,
  },
  // DESCRIPTION
  // PRIMARY
  [TypographyType.DESCRIPTION_MEDIUM_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.primaryHighlight,
  },
  [TypographyType.DESCRIPTION_SMALL_PRIMARY]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.primaryHighlight,
  },
  // TERTIARY
  [TypographyType.DESCRIPTION_MEDIUM_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.textTertiary,
  },
  [TypographyType.DESCRIPTION_SEMI_MEDIUM_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_SEMI_MEDIUM,
    color: colors.textTertiary,
  },
  [TypographyType.DESCRIPTION_SMALL_TERTIARY]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.textTertiary,
  },
  [TypographyType.DESCRIPTION_TINY_TERTIARY]: {
    fontSize: TypographyFontSize.NOTE_LARGE,
    color: colors.textTertiary,
  },
  // NORMAL
  [TypographyType.DESCRIPTION_MEDIUM]: {
    fontSize: TypographyFontSize.BODY_MEDIUM,
    color: colors.textSecondary,
  },
  [TypographyType.DESCRIPTION_SEMI_MEDIUM]: {
    fontSize: TypographyFontSize.BODY_SEMI_MEDIUM,
    color: colors.textSecondary,
  },
  [TypographyType.DESCRIPTION_SMALL]: {
    fontSize: TypographyFontSize.BODY_SMALL,
    color: colors.textSecondary,
  },
  [TypographyType.DESCRIPTION_TINY]: {
    fontSize: TypographyFontSize.NOTE_LARGE,
    color: colors.textSecondary,
  },
  // OTHERS
  [TypographyType.BUTTON_TEXT]: {
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.onPrimary,
  },
});

export const TYPOGRAPHY_DARK = getTypographyDarkColor(COLOR_DARK);
