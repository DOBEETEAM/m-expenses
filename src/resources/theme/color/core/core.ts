import { CoreCommonColor, GetCoreColor } from "../../data/model";

export const CORE_COMMON: CoreCommonColor = {
  // GREY
  grey50: "#FCFCFC",
  grey100: "#F7F7F7",
  grey200: "#F2F2F2",
  grey300: "#EAEAEA",
  grey400: "#C8C8C8",
  grey500: "#AAAAAA",
  grey600: "#808080",
  grey700: "#6B6B6B",
  grey800: "#4C4C4C",
  grey900: "#2A2A2A",

  // GREEN
  green50: "#e9f6e9",
  green100: "#cae9c8",
  green200: "#a9dba5",
  green300: "#86cd80",
  green400: "#6bc264",
  green500: "#51b748",
  green600: "#48a83f",
  green700: "#3b9534",
  green800: "#30842a",
  green900: "#196516",

  // BLUE
  blue50: "#e2f1ff",
  blue100: "#b9dcff",
  blue200: "#8ac6ff",
  blue300: "#55b0ff",
  blue400: "#259eff",
  blue500: "#008dff",
  blue600: "#007fff",
  blue700: "#126cea",
  blue800: "#1a5ad7",
  blue900: "#2138b8",

  // BLUE GREY
  blueGray50: "##edf1f4",
  blueGray100: "#d3dce2",
  blueGray200: "#b8c5ce",
  blueGray300: "#9badba",
  blueGray400: "#849aa9",
  blueGray500: "#6e889a",
  blueGray600: "#617888",
  blueGray700: "#516471",
  blueGray800: "#42515b",
  blueGray900: "#303b44",

  // YELLOW
  yellow50: "#fffde7",
  yellow100: "#fff9c4",
  yellow200: "#fff59d",
  yellow300: "#fef075",
  yellow400: "#fceb55",
  yellow500: "#ffeb3b",
  yellow600: "#fdd835",
  yellow700: "#fbc02d",
  yellow800: "#f9a825",
  yellow900: "#f57f16",

  // BLACK
  black: "#000000",

  // WHITE
  white: "#FFFFFF",
};

export const getCoreColor: GetCoreColor = (colors) => ({
  ...colors,

  // PRIMARY
  primary: "#812384",
  onPrimary: "#FFFFFF",

  // SECONDARY
  secondary: "#812384",
  onSecondary: "#FFFFFF",

  // NEUTRAL (Nature)
  neutral: colors.grey500,
  // —— Neutral variants ——
  background: "#E9E9EE",
  onBackground: "#000000",
  surface: "#FFFFFF",
  onSurface: "#000000",

  skeletonContainer: colors.blueGray100,
  // skeletonContent: lightenColor(colors.blueGray100 as string, -12),
});

export const CORE = getCoreColor(CORE_COMMON);
