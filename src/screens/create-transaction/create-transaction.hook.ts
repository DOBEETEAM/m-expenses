import { useTheme } from '@shared/hooks';
import {UseCreateTransactionProps} from './create-transaction.type'
import { useMemo } from 'react';
import { Colors } from '@resources/values';

export function useCreateTransaction (props: UseCreateTransactionProps) {}

export function useCreateTransactionStyle({ transactionCategory }: UseCreateTransactionProps) {
  const {theme} = useTheme();

  const navBarStyle = useMemo(() => {
    if (transactionCategory === 'Expense') {
      return {
        backgroundColor: Colors.EXPENSE
      }
    } else if (transactionCategory === 'Income') {
      return {
        backgroundColor: Colors.INCOME
      }
    } else {
      return {
        backgroundColor: Colors.TRANSFER
      }
    }
  }, [transactionCategory])

  return {navBarStyle}
}
