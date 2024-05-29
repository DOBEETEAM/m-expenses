import React, {useCallback} from 'react';
import {View} from 'react-native';
// @packages
import {FlatList} from 'react-native-gesture-handler';
// @types
import {NotificationProps} from './notification.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {useNotificationStyle} from './notification.hook';
// @helpers
import {summarizedText} from '@utils';
// @components
import {
  BundleIconSetName,
  Button,
  Container,
  IconButton,
  NavBar,
  ScreenWrapper,
  Typography,
} from '@components/base';
// @styles
import {styles} from './notification.style';

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
  const {iconMoreStyle, containerStyle} = useNotificationStyle();

  const renderNotifyItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      return (
        <Button>
          <Container
            noBackground
            flex
            row
            centerVertical
            style={{marginBottom: 15, justifyContent: 'space-between'}}>
            <View style={{flex: 1, maxWidth: 292}}>
              <Typography
                style={{marginBottom: 5}}
                type={TypographyType.TITLE_SEMI_LARGE}>
                {item.title}
              </Typography>
              <Typography type={TypographyType.TITLE_MEDIUM_TERTIARY}>
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
    [],
  );

  const renderRight = useCallback(
    () => (
      <IconButton
        bundle={BundleIconSetName.ENTYPO}
        name="dots-three-horizontal"
        iconStyle={iconMoreStyle}
      />
    ),
    [iconMoreStyle],
  );

  return (
    <ScreenWrapper
      safeLayout
      // safeTopLayout
      style={[containerStyle]}
      headerComponent={
        <NavBar
          primary={false}
          noBackground
          back
          title="Notification"
          renderRight={renderRight}
        />
      }>
      <FlatList
        data={DATA_NOTIFY}
        renderItem={renderNotifyItem}
        keyExtractor={(item, index) => String(item.id || index)}
        /**
         * TODO:
         * Component empty data
         * Modal when press icon More Options
         */
      />
    </ScreenWrapper>
  );
};

export const Notification = React.memo(_Notification);
