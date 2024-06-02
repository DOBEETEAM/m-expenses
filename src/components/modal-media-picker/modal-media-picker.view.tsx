import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
// @packages
import Modal from 'react-native-modal';
// @types
import {
  ModalMediaPickerProps,
  OptionButtonPicker,
} from './modal-media-picker.type';
import {TypographyType} from '@resources/theme';
import {ViewStyle} from '@data/models';
// @hooks
import {useMediaPicker, useTheme} from '@shared/hooks';
// @components
import {Typography, Container, Icon, Button} from '@components/base';
// @styles
import {styles} from './modal-media-picker.style';

const _ModalMediaPicker: React.FC<ModalMediaPickerProps> = ({
  isVisible,
  onClose,
  onPhotoSelected,
}) => {
  const {theme} = useTheme();
  const {imagesResult, handleOpenPhoto} = useMediaPicker();

  const optData: OptionButtonPicker[] = [
    {
      name: 'Camera',
      icon: 'camera',
      onPress: () => {},
    },
    {
      name: 'Image',
      icon: 'image',
      onPress: () => {
        handleOpenPhoto();
      },
    },
  ];

  useEffect(() => {
    if (imagesResult && imagesResult.length > 0 && onPhotoSelected) {
      onPhotoSelected(imagesResult);
    }
  }, [imagesResult, onPhotoSelected]);

  const contentContainerStyle: ViewStyle = useMemo(
    () => ({
      borderTopLeftRadius: theme.layout.borderRadiusGigantic,
      borderTopRightRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

  const lineTopModalStyle = useMemo(
    () => ({
      backgroundColor: theme.color.background,
      borderRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

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
  }, [btnContentStyle, iconStyle]);

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.2}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.container}>
      <Container style={[styles.contentContainer, contentContainerStyle]}>
        <View style={[styles.lineTopModal, lineTopModalStyle]} />

        <Container style={styles.btnOptionContainer} noBackground flex row>
          {renderContent()}
        </Container>
      </Container>
    </Modal>
  );
};

export const ModalMediaPicker = React.memo(_ModalMediaPicker);
