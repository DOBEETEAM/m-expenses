import React from 'react';
// @types
import {TypographyType} from '@resources/theme';
import {ListEmptyProps} from './list-empty.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @constants
import {BundleIconSetName} from '@components/base';
// @components
import {Container, Icon, Typography} from '@components/base';
// @styles
import {styles} from './list-empty.style';

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
