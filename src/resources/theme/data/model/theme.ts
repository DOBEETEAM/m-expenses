import {StatusBarStyle} from 'react-native';
import {Color} from './color';
import {TypographyType} from './typography';
import {TextStyle} from '@data/models';

export type Typography = {
  [type in TypographyType]?: TextStyle;
};
export type GetTypography = <T extends Color>(colors: T) => Typography;

export type Layout = {
  borderWidthPixel: number;
  borderWidthSmall: number;
  borderWidth: number;
  borderWidthLarge: number;
  borderRadiusExtraSmall: number;
  borderRadiusSmall: number;
  borderRadiusMedium: number;
  borderRadiusLarge: number;
  borderRadiusHuge: number;
  borderRadiusGigantic: number;

  shadow: {
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;

    elevation: number;
  };

  statusBarStyle: StatusBarStyle;
  statusBarSurfaceModeStyle: StatusBarStyle;
};

export type Font = {
  main?: string;
  sub?: string;
};

export interface Theme {
  id: string;
  name: string;
  color: Color;
  layout: Layout;
  typography: Typography;
  font?: Font;
}
