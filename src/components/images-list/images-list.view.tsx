import React, {useCallback, useMemo} from 'react';
import {Image} from 'react-native';
// @packages
import {FlatList} from 'react-native-gesture-handler';
// @types
import {ImagesListProps} from './images-list.type';
import {AttachmentImage} from '@screens/create-transaction';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {Container, Button, Icon} from '@components/base';
// @styles
import {styles} from './images-list.style';

const _ImagesList: React.FC<ImagesListProps> = ({
  data,
  horizontal = true,
  nestedScrollEnabled,
}) => {
  const {theme} = useTheme();

  const imageStyle = useMemo(
    () => ({
      borderRadius: theme.layout.borderRadiusMedium,
    }),
    [theme],
  );

  const iconRemoveImageStyle = useMemo(
    () => ({
      backgroundColor: theme.color.overlay30,
      borderRadius: theme.layout.borderRadiusLarge,
    }),
    [theme],
  );

  const iconRemoveStyle = useMemo(
    () => ({
      color: theme.color.surface,
      fontSize: 24,
    }),
    [theme],
  );

  const renderItem = useCallback(
    ({item, index}: {item: AttachmentImage; index: number}) => {
      return (
        <Container noBackground flex style={styles.imageItem}>
          <Image
            key={index}
            resizeMode="cover"
            source={{uri: item.uri, cache: 'only-if-cached'}}
            style={[styles.image, imageStyle]}
          />

          <Button style={[styles.iconRemoveImage, iconRemoveImageStyle]}>
            <Icon name="close-outline" style={iconRemoveStyle} />
          </Button>
        </Container>
      );
    },
    [imageStyle, iconRemoveImageStyle, iconRemoveStyle],
  );

  return (
    <Container noBackground flex row style={styles.container}>
      <FlatList
        horizontal={horizontal}
        nestedScrollEnabled={nestedScrollEnabled}
        data={data || []}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        style={{}}
      />
    </Container>
  );
};

export const ImagesList = React.memo(_ImagesList);
