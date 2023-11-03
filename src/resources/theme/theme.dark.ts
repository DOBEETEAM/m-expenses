import {Theme} from './data/model';
import {COLOR_DARK} from './color';
import {LAYOUT_DARK} from './layout';
import {TYPOGRAPHY_DARK} from './typography';
import {BASE_DARK_THEME_ID, BASE_DARK_THEME_NAME} from './theme.constant';

export const BASE_DARK_THEME: Theme = {
  id: BASE_DARK_THEME_ID,
  name: BASE_DARK_THEME_NAME,
  color: COLOR_DARK,
  layout: LAYOUT_DARK,
  typography: TYPOGRAPHY_DARK,
};
