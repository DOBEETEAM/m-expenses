import React, {useCallback, useEffect, useMemo} from 'react';
// @types
import {
  ModalMediaPickerProps,
  OptionButtonPicker,
} from './modal-media-picker.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {useMediaPicker, useTheme} from '@shared/hooks';
// @components
import {AppModal} from '..';
import {Typography, Container, Icon, Button} from '@components/base';
// @styles
import {styles} from './modal-media-picker.style';

const _ModalMediaPicker: React.FC<ModalMediaPickerProps> = ({
  isVisible,
  onClose,
  onPhotoSelected,
}) => {
  const {theme} = useTheme();
  const {imagesResult, handleOpenPhoto, handleOpenCamera} = useMediaPicker();

  const optData: OptionButtonPicker[] = [
    {
      name: 'Camera',
      icon: 'camera',
      onPress: handleOpenCamera,
    },
    {
      name: 'Image',
      icon: 'image',
      onPress: handleOpenPhoto,
    },
  ];

  useEffect(() => {
    if (typeof onPhotoSelected === 'undefined') {
      console.error(
        'Have not pass onPhotoSelected props or onPhotoSelected is undefined',
      );
      return;
    }

    if (imagesResult && imagesResult.length > 0) {
      onPhotoSelected(imagesResult);
    }
  }, [imagesResult, onPhotoSelected]);

  const btnContentStyle = useMemo(
    () => ({
      backgroundColor: theme.color.primary20,
      borderRadius: theme.layout.borderRadiusHuge,
    }),
    [theme],
  );

  const iconStyle = useMemo(
    () => ({
      fontSize: 25,
      color: theme.color.primary,
    }),
    [theme],
  );

  const renderContent = useCallback(() => {
    return optData.map((option, index) => (
      <Button
        onPress={option.onPress}
        key={index}
        style={[styles.btnContent, btnContentStyle]}>
        <Icon name={option.icon} style={iconStyle} />
        <Typography type={TypographyType.LABEL_LARGE_PRIMARY}>
          {option.name}
        </Typography>
      </Button>
    ));
  }, [optData, btnContentStyle, iconStyle]);

  return (
    <AppModal isVisible={isVisible} onCloseModal={onClose}>
      <Container style={styles.btnOptionContainer} noBackground flex row>
        {renderContent()}
      </Container>
    </AppModal>
  );
};

export const ModalMediaPicker = React.memo(_ModalMediaPicker);
