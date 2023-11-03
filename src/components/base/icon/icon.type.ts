// @packages
import {IconProps as RNIconProps} from 'react-native-vector-icons/Icon';
// @types
import {TextStyle} from '@data/models';
// @constants
import {BundleIconSetName} from './icon.constant';

export type BundleIcon =
  | BundleIconSetName.ANT_DESIGN
  | BundleIconSetName.ENTYPO
  | BundleIconSetName.EVIL_ICONS
  | BundleIconSetName.FEATHER
  | BundleIconSetName.FONTISTO
  | BundleIconSetName.FONT_AWESOME
  | BundleIconSetName.FONT_AWESOME_5
  | BundleIconSetName.FOUNDATION
  | BundleIconSetName.IONICONS
  | BundleIconSetName.MATERIAL_COMMUNITY_ICONS
  | BundleIconSetName.MATERIAL_ICONS
  | BundleIconSetName.OCTICONS
  | BundleIconSetName.SIMPLE_LINE_ICONS
  | BundleIconSetName.ZOCIAL;

export interface IconProps extends RNIconProps {
  bundle?: BundleIcon
}
