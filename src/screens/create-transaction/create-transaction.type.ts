import {AppScreenProps} from '@data/models';

export interface CreateTransactionProps
  extends AppScreenProps<'CreateTransaction'> {}

export type UseCreateTransactionProps = {
  transactionCategory?: 'Income' | 'Expense' | 'Transfer';
};
