import React, {useMemo} from 'react';
// @types
import {ModalTooltipProps} from './modal-tooltip.type';
import {ViewStyle} from '@data/models';
// @components
import {Container} from '@components/base';
// @styles
import {styles} from './modal-tooltip.style';
import {useTheme} from '@shared/hooks';

const _ModalTooltip: React.FC<ModalTooltipProps> = ({
  children,
  visible,
  containerStyle,
}) => {
  const {theme} = useTheme();

  const containerModalStyle: ViewStyle = useMemo(() => {
    return [
      {
        ...theme.layout.shadow,
        position: 'absolute',
        borderRadius: theme.layout.borderRadiusSmall,
      },
      containerStyle,
    ];
  }, [theme, containerStyle]);

  if (!visible) {
    return null;
  }

  return <Container style={containerModalStyle}>{children}</Container>;
};

export const ModalTooltip = React.memo(_ModalTooltip);
