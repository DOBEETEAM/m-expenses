import {TextStyle} from '@data/models';
import {Children} from '../base.type';
import {NavBarWrapperProps} from './nav-bar-wrapper/nav-bar-wrapper.type';

export interface NavBarProps extends NavBarWrapperProps {
  noBackground?: boolean;
  back?: boolean;

  title?: string;

  onBack?: () => void;

  renderLeft?: () => Children;
  renderRight?: () => Children;
  renderTitle?: () => Children;

  renderHeader?: () => Children;
  renderBack?: (backStyle: TextStyle) => Children;
}

