import { PixelRatio } from "react-native";
import { Layout } from "../data/model";

export const LAYOUT_LIGHT: Layout = {
  borderWidthPixel: 1 / PixelRatio.get(),
  borderWidthSmall: 0.5,
  borderWidth: 1,
  borderWidthLarge: 2,
  borderRadiusExtraSmall: 4,
  borderRadiusSmall: 6,
  borderRadiusMedium: 8,
  borderRadiusLarge: 10,
  borderRadiusHuge: 15,
  borderRadiusGigantic: 20,

  shadow: {
    shadowOffset: {
      width: 0,
      height: 2.25,
    },
    shadowOpacity: 0.161,
    shadowRadius: 3,

    elevation: 5,
  },

  statusBarStyle: "dark-content",
  statusBarSurfaceModeStyle: "light-content",
};
