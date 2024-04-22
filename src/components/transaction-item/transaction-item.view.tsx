import React from 'react';
import {Text, View} from 'react-native';
import {TransactionItemProps} from './transaction-item.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {
  BundleIconSetName,
  Container,
  Icon,
  Typography,
  Button,
} from '@components/base';
// @styles
import {styles} from './transaction-item.style';
import {TypographyType} from '@resources/theme';

const _TransactionItem: React.FC<TransactionItemProps> = () => {
  const {theme} = useTheme();

  return (
    <Button
      style={{
        marginHorizontal: 10,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Container
        style={{
          backgroundColor: theme.color.background,
          padding: 10,
          borderRadius: theme.layout.borderRadiusLarge,
        }}>
        <Icon
          bundle={BundleIconSetName.IONICONS}
          name="cart"
          style={{fontSize: 25, color: theme.color.primary}}
        />
      </Container>

      <Container flex style={{marginLeft: 10}}>
        <Typography type={TypographyType.LABEL_LARGE} style={{marginBottom: 5}}>
          Shopping
        </Typography>
        <Typography type={TypographyType.DESCRIPTION_MEDIUM_TERTIARY}>
          Buy some grocery
        </Typography>
      </Container>

      <Container>
        <Typography
          type={TypographyType.LABEL_LARGE}
          style={{marginBottom: 5, alignSelf: 'flex-end'}}>
          {' '}
          -50K
        </Typography>
        <Typography type={TypographyType.DESCRIPTION_MEDIUM_TERTIARY}>
          10:00 AM
        </Typography>
      </Container>
    </Button>
  );
};

export const TransactionItem = React.memo(_TransactionItem);
