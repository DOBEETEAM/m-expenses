import React, {useCallback, useMemo} from 'react';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
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
  onClose,
}) => {
  const {theme} = useTheme();

  const containerModalStyle: ViewStyle = useMemo(() => {
    return [
      styles.contentContainer,
      {
        ...theme.layout.shadow,
        borderRadius: theme.layout.borderRadiusSmall,
      },
      containerStyle,
    ];
  }, [theme, containerStyle]);

  const handlePressBackdrop = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <Container style={containerModalStyle}>{children}</Container>

      <TouchableWithoutFeedback
        onPress={handlePressBackdrop}
        style={styles.backdropContainer}></TouchableWithoutFeedback>
    </>
  );
};

export const ModalTooltip = React.memo(_ModalTooltip);
