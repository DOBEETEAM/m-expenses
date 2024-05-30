import React from 'react';
import {Text, View} from 'react-native';

import {TypographyType} from '@resources/theme';
import {ListEmptyProps} from './list-empty.type';

import {BundleIconSetName, Container, Icon, Typography} from '@components/base';
import {styles} from './list-empty.style';
import {useTheme} from '@shared/hooks';

const _ListEmpty: React.FC<ListEmptyProps> = ({icon, title}) => {
  const {theme} = useTheme();

  return (
    <Container
      noBackground
      flex
      center
      style={{flex: 1, justifyContent: 'center', paddingVertical: 15}}>
      {icon ? (
        icon
      ) : (
        <Icon
          bundle={BundleIconSetName.ANT_DESIGN}
          name="unknowfile1"
          size={32}
          style={{color: theme.color.contentBackground, marginBottom: 15}}
        />
      )}

      <Typography
        style={{color: theme.color.contentBackgroundStrong}}
        type={TypographyType.DESCRIPTION_SMALL_TERTIARY}>
        {title}
      </Typography>
    </Container>
  );
};

export const ListEmpty = React.memo(_ListEmpty);
