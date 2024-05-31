import {ViewStyle} from '@data/models';
import React from 'react';

export interface ModalTooltipProps {
  children: React.ReactNode;
  visible: boolean;
  containerStyle: ViewStyle;
  onClose?: () => void;
}
