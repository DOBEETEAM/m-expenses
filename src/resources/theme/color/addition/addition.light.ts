import {GetAdditionColor} from '@resources/theme/data/model';
import {SYSTEM_LIGHT} from '../system';

export const getAdditionLightColor: GetAdditionColor = (colors) => {
  return {
    //     STATUS COLOR
    // @todo: for flash message - api message.
    danger: '#ef476f',
    warning: '#ffd166',
    success: '#06d6a0',
    info: '#118ab2',
    other: '#073b4c',

    // BRAND COLOR
    // @todo: for specific brand like Facebook, Youtube,…
    facebook: '#4267B2',
    youtube: '#FF0000',
  };
};

export const ADDITION_LIGHT = getAdditionLightColor(SYSTEM_LIGHT);
