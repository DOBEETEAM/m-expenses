import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
// @types
import {IncomeExpenseCardProps} from './income-expense-card.type';
import {TypographyType} from '@resources/theme';
// @constants
import {Colors} from '@resources/values';
// @components
import {Container, Typography} from '@components/base';
// @styles
import {styles} from './income-expense-card.style';
// @images
import IncomeSvg from '@assets/icons/income.svg';
import ExpenseSvg from '@assets/icons/expense.svg';
import {useTheme} from '@shared/hooks';
import { formatCurrency } from '@utils';

const _IncomeExpenseCard: React.FC<IncomeExpenseCardProps> = ({type}) => {
  const {theme} = useTheme();

  const containerCardStyle = useMemo(
    () => ({
      backgroundColor: type === 'Income' ? Colors.INCOME : Colors.EXPENSE,
      borderRadius: theme.layout.borderRadiusGigantic,
    }),
    [theme],
  );

  const iconCardStyle = useMemo(
    () => ({
      borderRadius: theme.layout.borderRadiusLarge,
      padding: 6,
      marginRight: 10,
      height: 48
    }),
    [theme],
  );

  const labelStyle = useMemo(
    () => ({
      color: theme.color.white,
    }),
    [theme],
  );

  return (
    <Container flex row style={[styles.cardContainer, containerCardStyle]}>
      <Container style={[iconCardStyle]}>
        {type === 'Income' ? (
          <IncomeSvg fill={Colors.INCOME} />
        ) : (
          <ExpenseSvg fill={Colors.EXPENSE} />
        )}
      </Container>

      <Container noBackground flex>
        {type === 'Income' ? (
          <>
            <Typography type={TypographyType.LABEL_LARGE} style={[labelStyle]}>
              Income
            </Typography>
            <Typography type={TypographyType.LABEL_SEMI_HUGE} style={[labelStyle, styles.totalMoneyCard]}>
              {formatCurrency(Number('340000'))}
            </Typography>
          </>
        ) : (
          <>
            <Typography type={TypographyType.LABEL_LARGE} style={[labelStyle]}>
              Expense
            </Typography>
            <Typography type={TypographyType.LABEL_SEMI_HUGE} style={[labelStyle, styles.totalMoneyCard]}>
              {formatCurrency(Number('560000'))}
            </Typography>
          </>
        )}
      </Container>
    </Container>
  );
};

export const IncomeExpenseCard = React.memo(_IncomeExpenseCard);
