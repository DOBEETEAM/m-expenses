import React, {useMemo} from 'react';
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
import {summarizedText} from '@utils';
import {Colors} from '@resources';

const _TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  description,
  amount,
  timeTransaction,
  type,
}) => {
  const {theme} = useTheme();

  return (
    <Button style={styles.container}>
      <Container
        style={[
          styles.iconContainer,
          {
            backgroundColor: theme.color.primary5,
            borderRadius: theme.layout.borderRadiusLarge,
          },
        ]}>
        <Icon
          bundle={BundleIconSetName.IONICONS}
          name="cart"
          style={[styles.icon, {color: theme.color.primary}]}
        />
      </Container>

      <Container flex style={styles.contentContainer}>
        <Typography type={TypographyType.LABEL_LARGE} style={styles.titleText}>
          {title}
        </Typography>

        <Typography type={TypographyType.DESCRIPTION_SMALL_TERTIARY}>
          {description && summarizedText(description || '', 35)}
        </Typography>
      </Container>

      <Container noBackground>
        <Typography
          type={TypographyType.LABEL_LARGE}
          style={[
            styles.amountText,
            {
              color: type === 'Income' ? Colors.INCOME : Colors.EXPENSE,
              fontWeight: '600',
            },
          ]}>
          {(type === 'Income' ? '+' : '-') + ' ' + amount}
        </Typography>

        <Typography type={TypographyType.DESCRIPTION_MEDIUM_TERTIARY} style={{alignSelf: 'flex-end'}}>
          {timeTransaction}
        </Typography>
      </Container>
    </Button>
  );
};

export const TransactionItem = React.memo(_TransactionItem);
