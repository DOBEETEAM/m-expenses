import {GetAdditionColor} from '@resources/theme/data/model';
import {SYSTEM_DARK} from '../system';
import {ADDITION_LIGHT} from './addition.light';

export const getAdditionDarkColor: GetAdditionColor = (colors) => {
  return {
    ...ADDITION_LIGHT,
  };
};

export const ADDITION_DARK = getAdditionDarkColor(SYSTEM_DARK);
