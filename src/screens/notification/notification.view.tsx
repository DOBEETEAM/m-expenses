import React, {useCallback} from 'react';
import {View} from 'react-native';
// @packages
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
// @types
import {NotificationProps} from './notification.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {useNotification, useNotificationStyle} from './notification.hook';
// @helpers
import {summarizedText} from '@utils';
// @components
import {
  BundleIconSetName,
  Button,
  Container,
  Icon,
  IconButton,
  NavBar,
  ScreenWrapper,
  Typography,
} from '@components/base';
import {ListEmpty, ModalTooltip} from '@components';
// @styles
import {styles} from './notification.style';
import {useTheme} from '@shared/hooks';

const DATA_NOTIFY = [
  {
    id: '1',
    title: 'Shopping budget has exceeds the has exceeds the',
    description: 'Your Shopping budget has exceeds the limit',
    timeCreated: '19:23',
  },
  {
    id: '2',
    title: 'Shopping budget has exceeds the..',
    description: 'Your Shopping budget has exceeds the limit',
    timeCreated: '10:30',
  },
];

const _Notification: React.FC<NotificationProps> = () => {
  const {theme} = useTheme();
  const {optionsMore, toggleModalNotify, handleToggleModal} = useNotification();
  const {iconMoreStyle, containerStyle, itemNotifyStyle} =
    useNotificationStyle();

  const renderContentTooltip = useCallback(() => {
    return optionsMore.map((option, index) => {
      return (
        <Button
          onPress={option.onPress}
          key={option.id || index}
          useContentContainer
          style={[
            itemNotifyStyle,
            {paddingHorizontal: 25, paddingVertical: 15},
          ]}>
          <Typography type={TypographyType.LABEL_MEDIUM}>
            {option.title}
          </Typography>
        </Button>
      );
    });
  }, [optionsMore, itemNotifyStyle]);

  const renderNotifyItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <Button activeOpacity={0.8}>
          <Container
            noBackground
            flex
            row
            centerVertical
            style={[styles.itemNotify, itemNotifyStyle]}>
            <View style={styles.itemNotifyContent}>
              <Typography
                style={{marginBottom: 4}}
                type={TypographyType.LABEL_LARGE}>
                {item.title}
              </Typography>
              <Typography
                style={{marginBottom: 5}}
                type={TypographyType.LABEL_MEDIUM_TERTIARY}>
                {summarizedText(item.description || '', 35)}
              </Typography>
            </View>

            <Typography type={TypographyType.TITLE_MEDIUM_TERTIARY}>
              {item?.timeCreated}
            </Typography>
          </Container>
        </Button>
      );
    },
    [itemNotifyStyle],
  );

  const renderEmptyComponent = useCallback(() => {
    return (
      <ListEmpty
        icon={
          <Icon
            bundle={BundleIconSetName.IONICONS}
            name="notifications-off-sharp"
            style={{
              fontSize: 30,
              color: theme.color.contentBackgroundStrong,
              marginBottom: 10,
            }}
          />
        }
        title="There is no notification for now"
      />
    );
  }, [theme]);

  const renderRight = useCallback(
    () => (
      <IconButton
        onPress={handleToggleModal}
        bundle={BundleIconSetName.FEATHER}
        name="more-horizontal"
        iconStyle={iconMoreStyle}
      />
    ),
    [iconMoreStyle, handleToggleModal],
  );

  return (
    <ScreenWrapper
      safeLayout
      style={[containerStyle]}
      headerComponent={
        <NavBar
          primary={false}
          noBackground
          back
          title="Notification"
          renderRight={renderRight}
          containerStyle={{marginHorizontal: 5}}
        />
      }>
      <FlatList
        data={DATA_NOTIFY}
        renderItem={renderNotifyItem}
        keyExtractor={(item, index) => String(item.id || index)}
        ListEmptyComponent={renderEmptyComponent()}
      />

      <ModalTooltip visible={toggleModalNotify} containerStyle={styles.tooltip}>
        {renderContentTooltip()}
      </ModalTooltip>
    </ScreenWrapper>
  );
};

export const Notification = React.memo(_Notification);
