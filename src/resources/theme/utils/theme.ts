import {Theme} from '../data/model';
import {BASE_DARK_THEME_ID} from '../theme.constant';

export const isDarkTheme = (currentTheme: Theme) => {
  return currentTheme.id === BASE_DARK_THEME_ID;
};
