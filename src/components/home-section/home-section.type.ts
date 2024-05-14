import React from 'react';
import {ViewStyle} from '@data/models';

export interface HomeSectionProps {
  children?: React.ReactNode;

  title?: string;
  renderTitle?: () => React.ReactNode;

  containerStyle?: ViewStyle;
}
