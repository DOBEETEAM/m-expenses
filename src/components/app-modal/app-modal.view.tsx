import React, {Fragment, useCallback, useMemo} from 'react';
import {View} from 'react-native';
// @packages
import Modal from 'react-native-modal';
// @types
import {ViewStyle} from '@data/models';
import {AppModalProps} from './app-modal.type';
import {Ref} from '@components/base';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {Container} from '@components/base';
// @styles
import {styles} from './app-modal.style';

const _AppModal: React.FC<AppModalProps> = React.forwardRef(
  (
    {
      isVisible,
      useContainer,
      children,
      onCloseModal,
      containerStyle,
      contentStyle,
    },
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const contentContainerStyle: ViewStyle = useMemo(() => {
      return [
        {
          borderTopLeftRadius: theme.layout.borderRadiusGigantic,
          borderTopRightRadius: theme.layout.borderRadiusGigantic,
        },
        containerStyle,
      ];
    }, [theme, containerStyle]);

    const lineTopModalStyle = useMemo(
      () => ({
        backgroundColor: theme.color.background,
        borderRadius: theme.layout.borderRadiusGigantic,
      }),
      [theme],
    );

    const WrappedChildren = useCallback(
      (children: any) => {
        const WrapperContainer = useContainer ? Container : Fragment;
        let props = undefined;
        if (useContainer) {
          props = {flex: true, noBackground: true, style: [contentStyle]};
        }

        return <WrapperContainer {...props}>{children}</WrapperContainer>;
      },
      [useContainer, contentStyle],
    );

    return (
      <Modal
        ref={ref}
        isVisible={isVisible}
        onSwipeComplete={onCloseModal}
        onBackdropPress={onCloseModal}
        onBackButtonPress={onCloseModal}
        backdropOpacity={0.2}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        style={[styles.container]}>
        <Container style={[styles.contentContainer, contentContainerStyle]}>
          <View style={[styles.lineTopModal, lineTopModalStyle]} />

          {WrappedChildren(children)}
        </Container>
      </Modal>
    );
  },
);

export const AppModal = React.memo(_AppModal);
